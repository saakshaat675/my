class Rows{
constructor(x,y,w,h){
this.x=x
this.w=w

this.y=y
this.h=h

this.body=createSprite(x,y,w,h)
//this.body.addImage(rockk)
//this.body.scale=0.2;
console.log(this.w)
this.rockk=loadImage("strip.png")
}
display(){
person1.collide(this.body)	
image(this.rockk,this.body.x,this.body.y)



drawSprites()	
}
}