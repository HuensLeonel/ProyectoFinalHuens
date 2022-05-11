/* REGISTRAR SESION*/
class Sesion {
    constructor(usuario,contra){
      this.usuario = usuario;
      this.contra = contra;
    }
}
    const sesiones = [];
    
    document.querySelector("#btnRegistrar").addEventListener('click', ()=> {
    
      let usu = document.querySelector("#RegistrarUsu").value ;
      let clave = document.querySelector("#RegistrarContra").value ;

      if(usu != "" && clave != ""){
        let s =  new Sesion(usu,clave);
        sesiones.push(s);
        localStorage.removeItem('sesiones');
        localStorage.setItem('sesiones',JSON.stringify(sesiones));
        Toastify({
			text: "Registrado con Exito",
			className: "info",
			style: {
			  background: "linear-gradient(to right, #00b09b, #96c93d)",
			}
		  }).showToast();

        setTimeout(function(){
            location.href="../Index.html";
        }, 1500);
      }else{
        Toastify({
			text: "Error ingrese correctamente los datos",
			className: "info",
			style: {
			  background: "linear-gradient(to right, red, orange)",
			}
		  }).showToast();
      }

    })

    document.querySelector("#btnSalir").addEventListener('click', ()=> {
      location.href="/Index.html";
    })