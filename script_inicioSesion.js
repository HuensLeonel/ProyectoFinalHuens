/* INICIO DE SESION*/
document.querySelector("#btnIngresar").addEventListener('click', ()=> {
    let usu = document.querySelector("#LoginUsu").value ;
    let clave = document.querySelector("#LoginContra").value ;
  
    let sesions = JSON.parse(localStorage.getItem('sesiones'));

    if(sesions == undefined){
      Toastify({
        text: "Error Usuario y Contraseña",
        className: "info",
        style: {
          background: "linear-gradient(to right, red, orange)",
        }
      }).showToast();
    }

    const resultado = sesions.find( x => x.usuario === usu &&  x.contra  === clave);
    //console.log(resultado)
       
    if (resultado != undefined){
      //INICIA SESION
      Toastify({
        text: "Inicio Sesion correctamente",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
      setTimeout(function(){
        location.href="../Inicio.html";
    }, 1000);
    }else{
        Toastify({
            text: "Error Usuario y Contraseña",
            className: "info",
            style: {
              background: "linear-gradient(to right, red, orange)",
            }
          }).showToast();
    }
})
