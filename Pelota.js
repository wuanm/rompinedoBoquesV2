
class Pelota{
   
   constructor(){
    this.x=150;
    this.y=300
    this.r=6
    this.direccion=2;
    this.direcciony=-2;
    const rebota=document.getElementById("rebota")

    //tope =new Tope();

   
   }
    rebotaPelota(){
      rebota.play();
    }

    dibujarPelota(){
      fill(255,255,255)
    circle(this.x,this.y,this.r* 2);
   }

   moverPelota(){
      this.x-=this.direccion;
      this.y-=this.direcciony;
   }

   evitarSalga(){
      if(this.y<this.r ||this.y+(this.r)>415){
         this.rebotaPelota()
         this.direcciony=-this.direcciony;
      
      }else if( this.x<this.r||this.x+(this.r)>300){
         this.rebotaPelota()
         this.direccion=-this.direccion;
      }
   }
  

}
