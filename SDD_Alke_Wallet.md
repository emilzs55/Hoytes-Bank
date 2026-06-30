# Documento de Diseño de Software (SDD) — Alke Wallet

Este documento de diseño técnico explica de forma estructurada y pedagógica la arquitectura, el modelo de datos y el funcionamiento línea por línea de cada uno de los archivos del proyecto **Alke Wallet**. Está concebido como una guía de estudio para comprender a fondo cada parte del código.

---

## 1. Arquitectura del Sistema

Alke Wallet es una **Single-Client Web Application (Aplicación Web del Lado del Cliente)** orientada a simular una billetera electrónica (E-Wallet) de alta fidelidad. Al no contar con un servidor backend o base de datos relacional (como SQL), toda la persistencia de datos, autenticación y reglas de negocio se ejecutan directamente en el navegador web del usuario mediante la API de **HTML5 Web Storage (`localStorage`)**.

### Tecnologías Clave:
* **Estructura:** HTML5 semántico (`<header>`, `<main>`, `<section>`, `<footer>`).
* **Diseño y Layout:** Bootstrap 5.3.8 (Grillas responsive y componentes modales) y CSS3 puro (`style.css`).
* **Interactividad y Manipulación DOM:** JavaScript nativo (Vanilla JS) y jQuery 3.7.1.
* **Persistencia:** `localStorage` (almacena strings JSON en el navegador web).

---

## 2. Modelo de Datos (`localStorage`)

Para funcionar entre diferentes páginas web (`.html`), el sistema mantiene una base de datos en memoria en la terminal web. Los datos se organizan en las siguientes claves clave-valor:

| Clave (`key`) | Tipo de Dato JSON | Propósito en el Sistema |
| :--- | :--- | :--- |
| `usuarios` | Array de Objetos `[{nombre, usuario, password}]` | Base de datos general de todos los usuarios registrados en el sistema. |
| `usuarioLogueado` | Objeto `{nombre, usuario, password}` | Almacena la sesión activa. Si no existe, las páginas privadas bloquean el acceso. |
| `saldo` | Número entero (String numérico) | Dinero disponible en la cuenta virtual del usuario activo (ej: `400000`). |
| `transacciones` | Array de Objetos `[{tipo, monto, fecha, destinatario}]` | Registro histórico cronológico de depósitos e ingresos/envíos de dinero. |
| `contactos` | Array de Strings `["Nombre 1", "Nombre 2"]` | Agenda de destinatarios frecuentes para transferencias libres. |
| `firewallCripto` | Boolean (`"true"` o `"false"`) | Estado del escudo anti-fraude que bloquea transacciones sospechosas. |

---

## 3. Desglose Módulo por Módulo (Las 6 Pantallas)

### Módulo 1: Portada de Bienvenida (`index.html`)
* **Propósito:** Es la página de entrada pública (Landing Page).
* **Lógica del Código:** 
  * Estructurada con una rejilla de Bootstrap (`col-12 col-md-8 col-lg-6 text-center`).
  * Contiene dos enlaces de navegación directa: `Iniciar sesión` (`login.html`) y `Registrarse` (`register.html`).

---

### Módulo 2: Autenticación y Registro (`login.html` y `register.html`)
* **Propósito:** Control de acceso, validación de identidad y creación de cuentas.
* **Mecánica del Código en `register.html`:**
  1. **Lectura y Limpieza:** Se toman los campos de texto con `.value.trim()`.
  2. **Validación de Seguridad:** Se evalúa mediante expresiones regulares (`/[A-Z]/`, `/\d/`) que la contraseña tenga mínimo 8 caracteres, mayúsculas, símbolos y 2 números.
  3. **Verificación de Duplicados:** Se revisa con el método `.some()` si el nombre de usuario ya existe en el arreglo de `usuarios`.
  4. **Sanitización XSS:** Se eliminan caracteres `<` y `>` del nombre para evitar inyección de código.
  5. **Saldo Inicial:** Al registrarse con éxito, si la clave `saldo` está vacía en `localStorage`, se le asigna un bono de `$400.000` CLP por defecto.

* **Mecánica del Código en `login.html`:**
  1. **Búsqueda:** Se utiliza el método `.find()` sobre el arreglo de `usuarios` buscando coincidencia exacta de usuario y contraseña.
  2. **Creación de Sesión:** Si coincide, se guarda el objeto del usuario en `localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado))`.
  3. **Redirección:** Tras 2 segundos (`setTimeout`), se redirige a `menu.html`.

---

### Módulo 3: Menú Principal y Tarjeta Virtual (`menu.html`)
* **Propósito:** Panel de control central (Dashboard) del usuario logueado.
* **Componentes del Código:**
  * **Barrera de Seguridad (Guardia de Ruta):** Al iniciar la lectura del script, verifica si existe `usuarioLogueado`. Si es nulo o inválido, expulsa al usuario ejecutando `window.location.href = "login.html"`.
  * **Renderizado de Tarjeta Virtual:** Inyecta en el DOM (`.saldo` y `.id-titular`) los valores guardados en memoria formateados en moneda local (`$400.000`).
  * **Interruptor Firewall:** Un `input type="checkbox" role="switch"` sincronizado con `localStorage.getItem("firewallCripto")`. Si el usuario lo apaga o enciende, actualiza inmediatamente el almacenamiento web.
  * **Modal de Cierre de Sesión:** Al pulsar "Salir", se abre una ventana modal de Bootstrap (`new bootstrap.Modal(...)`). Al confirmar, ejecuta `localStorage.removeItem("usuarioLogueado")` destruyendo la sesión.

---

### Módulo 4: Depósito de Fondos (`deposit.html`)
* **Propósito:** Sumar saldo positivo a la cuenta propia.
* **Lógica Financiera (`#form-deposito`):**
  1. Captura el valor numérico digitado `Number($("#monto").val())`.
  2. Evalúa que sea mayor a 0 y que no supere el tope de seguridad por transacción (`$200.000`).
  3. Suma matemáticamente al saldo actual: `saldo = Math.round(saldo + monto);` y lo actualiza en `localStorage`.
  4. Crea un nuevo registro en el arreglo `transacciones` con el formato `{ tipo: "Deposito", monto: monto, fecha: ..., destinatario: "Cuenta propia" }`.
  5. Realiza una animación visual en la tarjeta (`fadeOut` / `fadeIn`) de jQuery para dar retroalimentación de actualización del dinero.

---

### Módulo 5: Transferencias y Agenda (`sendmoney.html`)
* **Propósito:** Enviar dinero a otros contactos restándolo del saldo disponible.
* **Lógica del Sistema:**
  * **Agenda de Contactos:** La función `mostrarContactos()` lee el arreglo `contactos`. Por cada elemento, construye dinámicamente opciones en una lista `<datalist>` para autocompletar la búsqueda y genera insignias visuales (`badge`) con jQuery `.each()`.
  * **Motor de Firewall Anti-Fraude:** Antes de realizar la transferencia, verifica si el interruptor del Firewall está activo. Si lo está, escanea el nombre del destinatario en minúsculas comparándolo contra una lista negra (`["bitcoin", "cripto", "casino", "apuesta", ...]`). Si encuentra coincidencias, detiene la transacción y emite una alerta roja de bloqueo.
  * **Débito de Fondos:** Valida que `monto <= saldo`. Si hay fondos suficientes, resta la cantidad, guarda la transacción como `{ tipo: "Envio" }` y redirige al menú.

---

### Módulo 6: Historial de Movimientos (`transactions.html`)
* **Propósito:** Auditoría y revisión de las operaciones pasadas.
* **Lógica del Código:**
  * Lee el arreglo `historial = JSON.parse(localStorage.getItem("transacciones")) || []`.
  * **Escenario Vacío:** Si el arreglo tiene longitud `0`, oculta la tabla (`$(".table").hide()`) y muestra el mensaje `#vacio` ("No tienes transacciones registradas aún").
  * **Renderizado de Tabla:** Si hay registros, itera con `$.each(historial, function(i, mov){ ... })`. Crea filas `<tr>` y celdas `<td>`. Si el tipo es `"Deposito"`, aplica texto verde (`text-success`) con un signo `+`. Si es `"Envio"`, aplica texto rojo (`text-danger`) con signo `-`.

---

## 5. Capa de Estilos (`assets/css/style.css`)

El archivo de estilos centraliza toda la identidad gráfica basada en principios de diseño web moderno:
* **Fondo:** Un gradiente radial oscuro fijo (`radial-gradient(...) #1e3c72, #0a1128`) que transmite elegancia y confianza financiera.
* **Estilo E-Wallet / Contenedores:** Las clases `.card` y `.tarjeta-virtual` aplican fondos semitransparentes con bordes sutiles y sombras suaves (`box-shadow`), logrando el efecto visual de tarjetas de crédito físicas en pantalla digital.
* **Convención Kebab-Case:** Todos los identificadores multi-palabra (`.tarjeta-virtual`, `.chip-tarjeta`, `.icono-accion`) emplean guiones medios coherentes con el estándar CSS de Bootstrap.
