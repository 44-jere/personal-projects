let buscar=document.querySelector(".busqueda")
let hola="saludo hola "
let input=document.getElementById("buscador")
buscar.addEventListener("click",(e)=>{
        e.target.addEventListener("keydown",e=>{
                if(e.keyCode==13 && input.value){
                    location.href=`https://www.google.com/search?q=${separarYMayuscular(`${input.value} `)}`
                }
            })
        
            if(e.target.id=="lupa" && input.value){
                location.href=`https://www.google.com/search?q=${separarYMayuscular(`${input.value} `)}`
            }
    
    })


function separarYMayuscular(nombre) { //recueda poner un espacio al final de cada frase
    let codigo
    let resultado=""
    let recibido=[]
    for (let i = 0; i < nombre.length; i++) {
      codigo=nombre.charAt(i)
      if(codigo==" "){
        recibido.push(resultado)
        resultado=""
      }else{
        resultado=resultado+codigo
      }
    }
    let mayusculas=recibido.map(p=>p.slice(0)).join("+")
    return mayusculas
}