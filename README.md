# Hoyte's Bank

Aplicación web de billetera virtual (e-wallet) desarrollada como proyecto final del
Módulo 2. Todo funciona del lado del cliente: no hay servidor ni base de datos externa,
los datos se guardan en el `localStorage` del navegador.

## Tecnologías

- **HTML5** para la estructura de las 7 vistas.
- **CSS3** en `assets/css/style.css` para el diseño (paleta oscura con acentos dorados,
  tipografías Cormorant Garamond y Outfit).
- **Bootstrap 5.3.8** para la grilla responsive, los modales y componentes.
- **JavaScript (ES6)** para la lógica: registro, login, validaciones, transacciones.
- **jQuery 3.7.1** para recorrer arreglos (`$.each`), animaciones (`fadeIn`, `slideDown`)
  y manipular el DOM en algunas vistas.
- **localStorage** para persistir usuarios, saldo, contactos e historial.

## Estructura del código

- La lógica de cada pantalla va **en un `<script>` dentro de su propio HTML**. No hay un
  `main.js` central: cada vista carga solo lo que necesita.
- `assets/js/lang.js` es el único JS compartido: contiene el diccionario de traducciones
  ES/EN y las funciones `getIdioma()`, `setIdioma()`, `t()` y el auto-logout por
  inactividad.

## Vistas (7)

1. `index.html` — pantalla de bienvenida con acceso a login y registro.
2. `register.html` — registro con validación de contraseña (mín. 8 caracteres,
   1 mayúscula, 1 símbolo y 2 números). Asigna un saldo inicial de prueba de £400.000.
3. `login.html` — inicio de sesión y recuperación de contraseña mediante un modal.
4. `menu.html` — tarjeta virtual con el saldo, accesos a las operaciones, cierre de
   sesión con confirmación e interruptor del filtro anti-fraude.
5. `deposit.html` — depósito de fondos con validación de monto y tope de £200.000.
6. `sendmoney.html` — transferencias con agenda de contactos y filtro que bloquea envíos
   a destinatarios sospechosos (cripto / apuestas).
7. `transactions.html` — historial de movimientos (depósitos en verde, envíos en rojo).

Además: interfaz bilingüe ES/EN con un botón en el encabezado, y cierre de sesión
automático tras 1 minuto de inactividad en las vistas privadas.

## Cómo ejecutarlo

Al ser un sitio estático se puede abrir `index.html` directamente en el navegador. Para
evitar restricciones de rutas conviene servirlo con un servidor local, por ejemplo:

```
python -m http.server 8000
```

y abrir `http://localhost:8000/`.

## Documentación

En `SDD_Hoytes_Bank_ewallet.md` está el documento de diseño con la explicación detallada
de cada archivo y de las claves usadas en `localStorage`.
