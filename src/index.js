

// Inserte el código aquí
let Fecha = document.getElementById('fecha')
let Hora = document.getElementById('hora')
let Min = document.getElementById('min')
let Seg = document.getElementById('seg')
setInterval(() => {
    
    function obtenerHora() {
        const date = new Date();
        Fecha.innerHTML="Fecha:"+date.getDay()+"/"+date.getDate()+"/"+date.getFullYear();
        Hora.innerHTML="Hora:"+date.getHours();
        Min.innerHTML="Minutos:"+date.getMinutes();
        Seg.innerHTML = "Segundos:"+date.getSeconds();
        
    
    }
    obtenerHora()
}, 1000);

let url = "http://localhost:3000/users"
function obtenerUsuarios() {
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

}
obtenerUsuarios()

let obtenerUsuario = async()=>{
    try{
        const response=await fetch("http://localhost:3000/users");
        const users = await response.json();

    }catch(error){
        console.log()
    }
}