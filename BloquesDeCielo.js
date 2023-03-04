var  cajadeBloques=[];
var block;
var seHanDibujado=false;
let p;

class BloquesCielo{
    constructor(){
        this.x=0;
        this.x2=33;
        this.y=20;
        this.y2=8;
        this.dibujados=false; 
        this.cajadeBloques=[]
        this.p=new Pelota()
    }


    //creo el block
    crearBlock(){
        for(let j=0;j<20;j++){
            var randoColor=color(random(255),random(255),random(255));
            for(let i=0;i<9;i++){
                block= [1+this.x+(i*this.x2),this.y+(j*this.y2),this.x2,this.y2,randoColor];
                cajadeBloques.push(block);
           }    
        } 
    }


    sacarBlockDeLista(){
        for(let i=0;i<cajadeBloques.length;i++){
            let block=cajadeBloques[i]
            fill(block[4])
            rect(block[0],block[1],block[2],block[3])
        }
        
    };

    mostrarBlockesEnPantalla() {
        // Solo se dibujarán los bloques una vez
        this.sacarBlockDeLista()
        if (cajadeBloques.length==0 && this.p.y>280){
            this.crearBlock()
        }
        
      }
};




  
  
  
  