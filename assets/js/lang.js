// Diccionario de traducciones para Hoyte's Bank
const LANG = {
    es: {
        // index.html
        bienvenido: "Bienvenido",
        descripcion: "Administra tus finanzas de forma simple y segura.",
        iniciarSesion: "Iniciar sesión",
        registrarse: "Registrarse",
        footer: "© 2026 Hoyte's Bank",

        // login.html
        tituloLogin: "Iniciar sesión",
        labelUsuario: "Usuario",
        placeholderUsuario: "Ingrese su usuario",
        labelPassword: "Contraseña",
        placeholderPassword: "Ingrese su contraseña",
        btnLogin: "Iniciar sesión",
        noTienesCuenta: "¿No tienes cuenta?",
        linkRegistrarse: "Registrarse",
        loginExito: "Inicio de sesión exitoso.",
        loginError: "Usuario y/o contraseña incorrectos.",
        olvidePass: "¿Olvidaste tu contraseña?",
        recuperarTitulo: "Recuperar Contraseña",
        recuperarDesc: "Ingresa tu nombre de usuario para restablecer tu contraseña en el sistema.",
        labelNuevaPass: "Nueva Contraseña",
        btnBuscarUser: "Buscar Cuenta",
        btnRestablecer: "Restablecer Contraseña",
        userNoEncontrado: "No se encontró ninguna cuenta con ese usuario.",
        passRestablecida: "Contraseña actualizada con éxito.",

        // register.html
        tituloRegistro: "Registro de usuario",
        labelNombre: "Nombre completo",
        placeholderNombre: "Ingrese su nombre",
        labelCorreo: "Correo electrónico",
        placeholderCorreo: "ejemplo@correo.com",
        placeholderPasswordReg: "Mín. 8 caracteres, 1 mayúscula, 1 símbolo y 2 números",
        labelConfirmar: "Confirmar contraseña",
        placeholderConfirmar: "Reingrese su contraseña",
        btnRegistrarse: "Registrarse",
        yaTienesCuenta: "¿Ya tienes cuenta?",
        linkIniciarSesion: "Iniciar sesión",
        passNoCoincide: "Las contraseñas no coinciden.",
        passInsegura: "La contraseña debe tener al menos 8 caracteres, 1 letra mayúscula, 1 símbolo y al menos 2 números.",
        usuarioExiste: "El usuario ya está registrado en el sistema.",
        registroExito: "Registro exitoso. Redirigiendo....",

        // menu.html
        saldoDisponible: "Saldo disponible",
        titularCuenta: "Titular de la cuenta",
        depositar: "Depositar",
        descDepositar: "Agrega dinero a tu billetera virtual al instante.",
        ingresarDinero: "Ingresar dinero",
        enviar: "Enviar",
        enviarDinero: "Enviar dinero",
        descEnviar: "Realiza transferencias libres a otros usuarios.",
        btnTransferir: "Transferir",
        movimientos: "Movimientos",
        descMovimientos: "Consulta el historial detallado de transacciones.",
        ultimosMovimientos: "Últimos movimientos",
        btnVerMovimientos: "Ver historial",
        filtroSeguridad: "Firewall Anti-Fraude",
        proteccion: "Bloqueo automático de transferencias a sitios de Criptomonedas y Casinos",
        cerrarSesion: "Cerrar Sesión",
        cerrarSesionMsg: "¿Estás seguro de que deseas salir de tu cuenta Hoyte's Bank?",
        cancelar: "Cancelar",
        siSalir: "Sí, salir",

        // deposit.html
        saldoEnCuenta: "Saldo en cuenta",
        tituloDeposito: "Ingresar dinero",
        labelMonto: "Monto a depositar",
        placeholderMonto: "Ej: 15000 o 15.000",
        btnDeposito: "Confirmar depósito",
        montoInvalido: "Por favor ingresa un monto válido superior a 0.",
        topeDeposito: "Por seguridad, el tope máximo por transacción es de £200,000.",
        depositoExito: "Depósito realizado con éxito. Redirigiendo...",

        // sendmoney.html
        contactos: "Contactos",
        nuevoContacto: "Nuevo contacto...",
        agregar: "Agregar",
        transferirFondos: "Transferir fondos",
        labelDestinatario: "Destinatario",
        placeholderDestinatario: "Selecciona o escribe un nombre",
        labelMontoEnvio: "Monto",
        placeholderMontoEnvio: "Ej: 5000 o 5.000",
        btnEnviar: "Enviar dinero",
        fondosInsuficientes: "Fondos insuficientes para esta transferencia.",
        topeTransferencia: "Por seguridad, el tope máximo por transferencia es de £200,000.",
        filtroBloqueo: "El Filtro de Seguridad ha bloqueado esta transferencia. Motivo: el destinatario coincide con un sitio potencialmente peligroso (cripto/apuestas).",
        envioExito1: "Transferencia de £",
        envioExito2: " enviada con éxito a ",
        envioExito3: ". Redirigiendo...",

        // transactions.html
        historialMov: "Historial de movimientos",
        thFecha: "Fecha",
        thTipo: "Tipo",
        thMonto: "Monto",
        thDetalle: "Detalle",
        sinMovimientos: "No tienes transacciones registradas aún.",
        sesionExpirada: "Por seguridad, tu sesión ha sido cerrada automáticamente tras 1 minuto de inactividad."
    },
    en: {
        // index.html
        bienvenido: "Welcome",
        descripcion: "Manage your finances simply and securely.",
        iniciarSesion: "Sign In",
        registrarse: "Sign Up",
        footer: "© 2026 Hoyte's Bank",

        // login.html
        tituloLogin: "Sign In",
        labelUsuario: "Username",
        placeholderUsuario: "Enter your username",
        labelPassword: "Password",
        placeholderPassword: "Enter your password",
        btnLogin: "Sign In",
        noTienesCuenta: "Don't have an account?",
        linkRegistrarse: "Sign Up",
        loginExito: "Login successful.",
        loginError: "Incorrect username and/or password.",
        olvidePass: "Forgot your password?",
        recuperarTitulo: "Reset Password",
        recuperarDesc: "Enter your username to reset your password in the system.",
        labelNuevaPass: "New Password",
        btnBuscarUser: "Find Account",
        btnRestablecer: "Reset Password",
        userNoEncontrado: "No account found with that username.",
        passRestablecida: "Password updated successfully.",

        // register.html
        tituloRegistro: "Create Account",
        labelNombre: "Full Name",
        placeholderNombre: "Enter your full name",
        labelCorreo: "Email Address",
        placeholderCorreo: "example@email.com",
        placeholderPasswordReg: "Min. 8 chars, 1 uppercase, 1 symbol & 2 numbers",
        labelConfirmar: "Confirm Password",
        placeholderConfirmar: "Re-enter your password",
        btnRegistrarse: "Sign Up",
        yaTienesCuenta: "Already have an account?",
        linkIniciarSesion: "Sign In",
        passNoCoincide: "Passwords do not match.",
        passInsegura: "Password must have at least 8 characters, 1 uppercase letter, 1 symbol and at least 2 numbers.",
        usuarioExiste: "This username is already taken.",
        registroExito: "Registration successful. Redirecting....",

        // menu.html
        saldoDisponible: "Available Balance",
        titularCuenta: "Account Holder",
        depositar: "Deposit",
        descDepositar: "Add money to your digital wallet instantly.",
        ingresarDinero: "Deposit Funds",
        enviar: "Send",
        enviarDinero: "Send Money",
        descEnviar: "Make fee-free transfers to other users.",
        btnTransferir: "Transfer",
        movimientos: "History",
        descMovimientos: "Check your detailed transaction history.",
        ultimosMovimientos: "Recent Transactions",
        btnVerMovimientos: "View History",
        filtroSeguridad: "Anti-Fraud Firewall",
        proteccion: "Automatic blocking of transfers to Crypto and Gambling sites",
        cerrarSesion: "Log Out",
        cerrarSesionMsg: "Are you sure you want to log out of your Hoyte's Bank account?",
        cancelar: "Cancel",
        siSalir: "Yes, log out",

        // deposit.html
        saldoEnCuenta: "Account Balance",
        tituloDeposito: "Deposit Funds",
        labelMonto: "Amount to deposit",
        placeholderMonto: "e.g. 15000 or 15,000",
        btnDeposito: "Confirm Deposit",
        montoInvalido: "Please enter a valid amount greater than 0.",
        topeDeposito: "For security, the maximum per transaction is £200,000.",
        depositoExito: "Deposit successful. Redirecting...",

        // sendmoney.html
        contactos: "Contacts",
        nuevoContacto: "New contact...",
        agregar: "Add",
        transferirFondos: "Transfer Funds",
        labelDestinatario: "Recipient",
        placeholderDestinatario: "Select or type a name",
        labelMontoEnvio: "Amount",
        placeholderMontoEnvio: "e.g. 5000 or 5,000",
        btnEnviar: "Send Money",
        fondosInsuficientes: "Insufficient funds for this transfer.",
        topeTransferencia: "For security, the maximum per transfer is £200,000.",
        filtroBloqueo: "The Security Filter has blocked this transfer. Reason: the recipient matches a potentially dangerous site (crypto/gambling).",
        envioExito1: "Transfer of £",
        envioExito2: " successfully sent to ",
        envioExito3: ". Redirecting...",

        // transactions.html
        historialMov: "Transaction History",
        thFecha: "Date",
        thTipo: "Type",
        thMonto: "Amount",
        thDetalle: "Details",
        sinMovimientos: "You have no transactions recorded yet.",
        sesionExpirada: "For your security, your session has been automatically logged out after 1 minute of inactivity."
    }
};

// funcion para obtener el idioma guardado (por defecto español)
function getIdioma(){
    return localStorage.getItem("idioma") || "es";
}

// funcion para cambiar idioma
function setIdioma(lang){
    localStorage.setItem("idioma", lang);
    location.reload();
}

// funcion para obtener un texto traducido
function t(clave){
    const idioma = getIdioma();
    return LANG[idioma][clave] || clave;
}

// Sistema de Ciberseguridad: Cierre de Sesión por Inactividad (1 minuto / 60 segundos)
function iniciarControlInactividad() {
    // Solo activar si hay un usuario logueado
    const usuarioLog = localStorage.getItem("usuarioLogueado");
    if (!usuarioLog) return;

    let temporizadorInactividad;
    const TIEMPO_LIMITE = 60000; // 60 segundos en milisegundos

    function cerrarSesionPorInactividad() {
        localStorage.removeItem("usuarioLogueado");
        alert(t("sesionExpirada"));
        window.location.href = "login.html";
    }

    function reiniciarTemporizador() {
        clearTimeout(temporizadorInactividad);
        temporizadorInactividad = setTimeout(cerrarSesionPorInactividad, TIEMPO_LIMITE);
    }

    // Escuchar eventos de interacción en la ventana
    window.addEventListener("mousemove", reiniciarTemporizador);
    window.addEventListener("mousedown", reiniciarTemporizador);
    window.addEventListener("keypress", reiniciarTemporizador);
    window.addEventListener("scroll", reiniciarTemporizador);
    window.addEventListener("touchstart", reiniciarTemporizador);

    // Iniciar temporizador
    reiniciarTemporizador();
}

window.addEventListener("DOMContentLoaded", iniciarControlInactividad);
