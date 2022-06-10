class Snow{
constructor(x,y,w,h){
    options={
    friction:0.1,
    density:0.001,
    isStatic:false
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
  this.snowfallImage = loadImage("snow5.webp");
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
}
display(){
    imageMode(CENTER)
    image(0,0,this.w,this.h)
}
}