let nombre, correo, mensaje;
let formulario = documento.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    mensaje = document.querySelector("#textarea").value;
    console.log(nombre)
}
function ValidarData(nombre, correo, mensaje) {
    if (nombre.length==0 || correo.length==0 || mensaje.length==0) {
        
        Swal.fire ({
            title: 'Error!',
            Text: 'do you want to continue',
            icon: 'Error',
            confirmButtonText: 'Cool',
            iconColor:'purple'
        })
    }
}