let propietario, placa, modelo, tipo, fecha, hora, Cantidad;
let formulario = document.getElementById('form')


formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerData()
})

function LeerData() {
    propietario = document.getElementById('propietario').value;
    modelo = document.getElementById('modelo').value;
    placa = document.getElementById('placa').value;
    tipo = document.getElementById('tipo').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;
    cantidad = document.getElementById('Cantidad').value;

    ValidarData(propietario, placa, modelo, tipo, fecha, hora, Cantidad)
    GuardarLocalStorage(propietario, placa, modelo, tipo, fecha, hora, Cantidad)
   
}
function ValidarData(propietario, placa, modelo, tipo, fecha, hora, Cantidad) {
    if (propietario.length==0 || modelo.length==0 || placa.length==0 || tipo.length==0 || fecha.length==0 || hora.length==0 || Cantidad.length==0) {
        
        Swal.fire ({
            title: 'Error!',
            Text: 'do You want to continue',
            icon: 'error',
            confirmButtonText: 'OK',
            iconColor:'purple'
        })
    }
}

  function GuardarLocalStorage(propietario, placa, modelo, tipo, fecha, hora, Cantidad) {
    localStorage.setItem('Propietario',propietario)
    localStorage.setItem('Placa',placa)
    localStorage.setItem('Modelo',modelo)
    localStorage.setItem('Tipo',tipo)
    localStorage.setItem('Fecha',fecha)
    localStorage.setItem('Hora',hora)
    localStorage.setItem('cantidad',Cantidad)
    ListarData()

    }

    function ListarData() {
        let propietarioUsu = localStorage.getItem('Propietario')
        let placaUsu = localStorage.getItem('Placa')
        let modeloUsu = localStorage.getItem('Modelo')
        let tipoUsu = localStorage.getItem('Tipo')
        let fechaUsu = localStorage.getItem('Fecha')
        let horaUsu = localStorage.getItem('Hora')
        let cantidadUsu = localStorage.getItem('cantidad')
        
    }