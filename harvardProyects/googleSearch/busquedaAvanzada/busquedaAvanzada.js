let contenedorPadre=document.querySelector("#contenedor-busqueda")
let inputs=document.querySelectorAll("input")
let buscarBoton=document.getElementById("buscar")
let link="https://www.google.com/search?"
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

contenedorPadre.addEventListener("keydown",click=>{
    if(click.keyCode==13){
        condicion()
    }
    buscarBoton.addEventListener("click",condicion)
})

function condicion(){
    if(inputs[1].value){
        link=link+"as_q="+separarYMayuscular(`${ inputs[1].value}+ `)
    }
    if(inputs[2].value){
        link=link+"&as_epq="+separarYMayuscular(`${ inputs[2].value}+ `)
    }
    if(inputs[3].value){
        link=link+"&as_oq="+separarYMayuscular(`${ inputs[3].value}+ `)
    }
    if(inputs[4].value){
        link=link+"&as_eq="+separarYMayuscular(`${ inputs[4].value}+ `)
    }
    if(inputs[5].value){
        link=link+"&as_nlo="+separarYMayuscular(`${ inputs[5].value}+ `)
    }
    if(inputs[6].value){
        link=link+"&as_nhi="+separarYMayuscular(`${ inputs[6].value} `)
    }
    location.href=link
}