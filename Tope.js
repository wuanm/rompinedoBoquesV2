let tope;

class Tope{
    constructor(){
        this.x=125;
        this.y=400;
        this.x2=30;
        this.y2=5;

       

    }
    //movimiento de el tope
    move(moviX){
       return this.x+=moviX;
    }
    


    //dibujo de tope
    dibujarTope(){
        fill(255,255,255)
        rect(this.x,this.y,this.x2,this.y2);
    }

}

