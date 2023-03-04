
//https://p5js.org/es/reference/
let miPelota;
let miTope;
let cielo;
let stop=0;
let izquierda=-12;
let derecha=12;
let count=0;
let cuenta=0;
document.addEventListener('DOMContentLoaded', () => {
  // Obtener el elemento de audio
  const sonido = document.getElementById('sonido');

  // Intentar reproducir el archivo de audio
  const playPromise = sonido.play();

  // Manejar cualquier error de reproducción
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // La reproducción comenzó con éxito
    }).catch(error => {
      // La reproducción falló
      console.error('No se pudo reproducir el archivo de audio:', error);
    });
  }
});


//const  sonido=document.getElementById("sonido")
const  soniPelota=document.getElementById("sonPelota")
const rebota=document.getElementById("rebota")
const contador=document.getElementsByClassName(".caja")

//funciones para funcionen los sonido de la pelota
function  elSonido(){
  sonido.play();
  
}
function elSonidoPelota(){
  soniPelota.play();
}





function setup() {
  createCanvas(300, 415);
  miPelota = new Pelota();
  miTope=new Tope();
  cielo=new BloquesCielo();
  cielo.crearBlock(); //traemos la lista de bloques ante de dibujarlos
  
}

function draw() {
  background(0);
  //funcion dibujar pelota
  miPelota.dibujarPelota();
  miPelota.moverPelota();
  miPelota.evitarSalga();
  
  
  


 
  

 //Dibujar topeCielo
cielo. mostrarBlockesEnPantalla();


  
  //funcion dubujar tope
  miTope.dibujarTope();
  
  //checamos la coalision entre la pelota y el tope
  coalisionConTope();

  //checamosla coliasion entre pelota y cielo
  coalisionPelotaTopeCielo();

  //usar el touch
  touchMoved()

}
 //movimiento del tope cuando suelta el boton
 function keyReleased(){
    miTope.move(stop);
  }

  //funcion de contador
  function elContador(){
    cuenta+=1;
    document.getElementById("caja").innerHTML=cuenta;

  }
  


//movimiento cuando el boton esta precionado
function keyPressed(){
  if(key=="ArrowRight"){
    (miTope.x+miTope.x2)>295 ? miTope.move(stop): miTope.move(derecha);
  }else if(key=="ArrowLeft"){
    (miTope.x<5) ? miTope.move(stop): miTope.move(izquierda);
  }
}

function coalisionConTope(){
  if (miPelota.x + miPelota.r >= miTope.x && miPelota.x - miPelota.r <= miTope.x + miTope.x2) {
    if (miPelota.y + miPelota.r >= miTope.y && miPelota.y - miPelota.r <=miTope.y + miTope.y2) {
      elSonidoPelota();
      miPelota.direcciony = -miPelota.direcciony;
    }
  }
}


function coalisionPelotaTopeCielo(){
  let bloquesEliminar=[];
  if(this.cajadeBloques.length >0){
    for(let i=0;i<this.cajadeBloques.length;i++){
    //creamos el bloque porque cada vuelta el iterrador da una lista con cuatro resultado
    let bloque=this.cajadeBloques[i]
    var x_posicion=bloque[0]  //posicion x
    var y_posicion=bloque[1]  //posicion y
    let ancho_bloque=bloque[2]
    let alto_bloque=bloque[3]
    //tramemos los valores de la pelota
    let x_centro_pelota=miPelota.x
    let  y_centro_pelota=miPelota.y
    let radio_pelota=miPelota.r
  
  
    //Verifica si la pelota choca con el boque
    if(x_centro_pelota+radio_pelota>=x_posicion &&
        x_centro_pelota-radio_pelota<=x_posicion+ancho_bloque &&
        y_centro_pelota+radio_pelota>=y_posicion &&
        y_centro_pelota-radio_pelota<=y_posicion+alto_bloque){
          //si la pelota choca cambiamos de direccion
          miPelota.direcciony=- miPelota.direcciony
          elSonido();
          elContador();
          
       
          
        
          //Eliminamos el block de la lista
          this.cajadeBloques.splice(i,1)
          
          
  
    }
    } 
  }
}
function touchMoved() {
  // Obtenemos la posición actual del tope
  let topeX = miTope.x + miTope.x2 / 2;

  // Obtenemos la posición del dedo del usuario en la pantalla
  let touchX = touchX;

  // Calculamos la distancia entre la posición actual del tope y la posición del dedo del usuario
  let distancia = touchX - topeX;

  // Movemos el tope en función de la distancia calculada
  if (distancia > 0) {
    miTope.move(derecha);
  } else {
    miTope.move(izquierda);
  }

  // Prevenimos que la pantalla se desplace cuando el usuario mueve el tope con el touch
  return false;
}

