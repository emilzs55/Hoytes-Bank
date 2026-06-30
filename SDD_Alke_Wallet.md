# Diseño y Funcionamiento del Proyecto Alke Wallet

En este documento explico cómo está armada la billetera web **Alke Wallet**, cómo se conectan las páginas entre sí y cómo funciona la lógica de programación en cada archivo.

---

## 1. ¿Cómo funciona la aplicación?

El proyecto está desarrollado 100% del lado del cliente (en el navegador web). Como no utilizamos un servidor backend ni una base de datos externa (como MySQL), usamos la memoria interna del navegador (**`localStorage`**) para guardar los usuarios, el dinero y los movimientos.

### Tecnologías utilizadas:
* **Estructura HTML:** Uso etiquetas estándar (`header`, `main`, `section`, `footer`, `form`, `table`).
* **Estilos CSS:** Bootstrap 5.3.8 para organizar las filas y columnas (`row`, `col`), combinado con estilos propios en `assets/css/style.css`.
* **Programación:** JavaScript clásico (Vanilla JS) y jQuery 3.7.1 para manejar eventos de clics, formularios y animaciones sencillas.

---

## 2. Base de Datos en el Navegador (`localStorage`)

Para que los datos se mantengan al pasar de una página a otra, guardamos información en estas 6 variables dentro de `localStorage`:

| Clave | Tipo de dato | Para qué sirve |
| :--- | :--- | :--- |
| `usuarios` | Arreglo de objetos | Guarda la lista de cuentas registradas con su nombre, usuario y contraseña. |
| `usuarioLogueado` | Objeto | Guarda los datos de la persona que inició sesión. Si esto está vacío, no se puede entrar al menú. |
| `saldo` | Número | Guarda el dinero disponible actualmente (por defecto inicia en `400000`). |
| `transacciones` | Arreglo de objetos | Guarda el historial con la fecha, el tipo de movimiento (Depósito o Envío) y el monto. |
| `contactos` | Arreglo de textos | Lista de nombres que aparecen en la agenda al transferir dinero. |
| `firewallCripto` | Booleano (`true`/`false`) | Guarda si la opción para bloquear transacciones a sitios cripto está encendida o apagada. |

---

## 3. Explicación de cada página web

### 1. Portada principal (`index.html`)
Es la pantalla de bienvenida. Tiene un contenedor central con el título y dos botones principales que llevan a `login.html` (para entrar) o a `register.html` (para crear cuenta).

### 2. Registro y Acceso (`register.html` y `login.html`)
* **En el Registro (`register.html`):**
  * Leo los campos del formulario quitando los espacios vacíos con `.trim()`.
  * Verifico que la contraseña cumpla los requisitos mínimos (8 caracteres, una mayúscula, un símbolo y dos números).
  * Reviso con un `.some()` que el nombre de usuario no esté repetido en la lista de `usuarios`.
  * Limpio el texto quitando símbolos como `<` o `>` para evitar que ingresen código malicioso.
  * Al registrarse correctamente, le asigno los primeros **$400.000** de saldo de prueba.

* **En el Login (`login.html`):**
  * Busco en el arreglo de usuarios si coinciden el usuario y la contraseña usando `.find()`.
  * Si coinciden, guardo ese usuario en `usuarioLogueado` y redirijo al menú principal tras mostrar una alerta verde.

### 3. Menú principal (`menu.html`)
* **Validación de sesión:** Lo primero que hace el script es revisar si existe un `usuarioLogueado`. Si no existe, manda al usuario de vuelta a `login.html`.
* **Tarjeta de saldo:** Muestra en pantalla el saldo formateado en pesos chilenos (`es-CL`) y el nombre del titular.
* **Interruptor de seguridad:** Un switch de Bootstrap que permite encender o apagar el filtro de seguridad contra sitios cripto, guardando el cambio al instante.
* **Cerrar sesión:** Al presionar el botón rojo de salir, se abre un modal de confirmación. Si el usuario acepta, borra la sesión de `localStorage` y regresa al login.

### 4. Ingresar dinero (`deposit.html`)
* Valida que la sesión esté activa.
* Tiene un campo de texto donde el usuario escribe el monto. El script limpia automáticamente si el usuario escribió puntos de miles (ej: `15.000` pasa a ser `15000`).
* Verifica que el número sea mayor a 0 y que no supere el tope de **$200.000** por operación.
* Suma el dinero a la variable `saldo`, guarda el nuevo movimiento en el arreglo de `transacciones` y actualiza el número en pantalla con un efecto de parpadeo (`fadeOut`/`fadeIn`).

### 5. Enviar dinero (`sendmoney.html`)
* **Agenda:** La función `mostrarContactos()` carga los nombres guardados y los muestra como etiquetas (`badges`) y como opciones autocompletables (`<datalist>`). Además tiene un botón para agregar nuevos contactos a la lista.
* **Filtro de seguridad:** Antes de enviar el dinero, revisa si el interruptor de seguridad está activado (`true`). Si lo está, busca si el destinatario incluye palabras como `"bitcoin"`, `"cripto"` o `"casino"`. Si encuentra alguna, frena el envío y muestra una alerta roja indicando el bloqueo.
* **Envío:** Si todo está bien y el saldo es suficiente, resta el monto del saldo total, guarda el registro en el historial y muestra un mensaje de éxito.

### 6. Historial de movimientos (`transactions.html`)
* Lee el arreglo de `transacciones` desde el `localStorage`.
* Si la lista está vacía, oculta la tabla y muestra un mensaje que dice que aún no hay movimientos.
* Si hay transacciones, recorre la lista con un bucle `$.each()` y va agregando filas (`<tr>`) a la tabla. Si el movimiento es un Depósito, pinta el número en color verde (`text-success`); si es un Envío, lo pinta en color rojo (`text-danger`).

---

## 4. Organización de los estilos (`style.css`)

El archivo CSS mantiene las reglas visuales ordenadas de forma sencilla:
* **Color de fondo:** Un degradado oscuro en tonos azules para darle un estilo serio y ordenado.
* **Tarjetas:** Los contenedores y la tarjeta virtual del saldo usan un fondo semitransparente con bordes suaves (`rgba`) para resaltar sobre el fondo.
* **Nombres de clases:** Todas las clases que tienen más de una palabra usan guion medio (`.tarjeta-virtual`, `.icono-accion`), siguiendo exactamente la misma regla de escritura de Bootstrap (`btn-success`, `form-control`).
