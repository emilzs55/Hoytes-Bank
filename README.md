# Hoyte's Bank 💳

Proyecto de aplicación web frontend para el desarrollo de una billetera virtual (E-Wallet), realizado como parte de las prácticas y evaluación final del Módulo 2.

---

## 📋 Descripción del Proyecto

**Hoyte's Bank** es una plataforma bancaria de administración de dinero digital que se ejecuta completamente en el navegador web del usuario. Permite simular las operaciones habituales de una entidad financiera en Libras Esterlinas (£) de forma intuitiva, rápida y segura sin necesidad de instalar programas adicionales ni conectarse a una base de datos externa.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructuración semántica de las 6 vistas oficiales de la aplicación (`header`, `main`, `section`, `footer`).
* **Bootstrap 5.3.8:** Sistema de rejilla responsive (`grid`), diseño adaptable para móviles y ventanas modales de confirmación.
* **CSS3:** Estilos personalizados en `assets/css/style.css` (diseño de tarjeta virtual, efectos visuales y gradientes).
* **JavaScript (ES6):** Lógica principal de negocio, control de sesiones, validaciones de seguridad y formateo de monedas.
* **jQuery 3.7.1:** Manipulación del DOM, recorrido de arreglos (`$.each`) y animaciones visuales suaves (`fadeIn`, `fadeOut`, `slideDown`).
* **HTML5 Web Storage (`localStorage`):** Almacenamiento persistente en el navegador para mantener guardados los usuarios, el saldo disponible, la agenda y el historial de transacciones.

---

## ✨ Funcionalidades Principales

1. **Pantalla de Bienvenida (`index.html`):** Portal de acceso directo para iniciar sesión o crear una cuenta nueva.
2. **Registro Segurizado (`register.html`):** Creación de cuentas con validación de contraseñas robustas (mínimo 8 caracteres, mayúsculas, símbolos y números) y sanitización de nombres. Al registrarse, asigna un saldo inicial de prueba de **£400,000 GBP**.
3. **Inicio de Sesión (`login.html`):** Verificación de credenciales registradas y protección de acceso.
4. **Menú Principal (`menu.html`):** Visualización de la tarjeta bancaria virtual con el saldo actual, acceso rápido a todas las operaciones, botón de cierre de sesión con confirmación y un interruptor para encender o apagar el filtro antipeligros.
5. **Depósito de Dinero (`deposit.html`):** Permite recargar fondos en Libras Esterlinas (£) a la cuenta con validación de montos.
6. **Transferencias y Agenda (`sendmoney.html`):** Envío de dinero a otros usuarios con selector autocompletable de contactos. Incluye un botón para añadir nuevos contactos y un **Filtro de Seguridad Anti-Fraude** que bloquea transferencias a sitios dudosos (criptomonedas o apuestas).
7. **Historial de Movimientos (`transactions.html`):** Tabla dinámica con el detalle cronológico de depósitos (en color verde con signo `+`) y transferencias realizadas (en color rojo con signo `-`).

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona o descarga este repositorio en tu computadora.
2. Abre la carpeta del proyecto en tu explorador de archivos.
3. Haz doble clic en el archivo **`index.html`** para abrirlo en tu navegador web favorito (Google Chrome, Firefox, Edge, etc.).
4. ¡Listo! Puedes registrar un usuario de prueba para comenzar a operar.

---

## 👨‍💻 Autor
Proyecto desarrollado para la evaluación práctica de Front-End.
