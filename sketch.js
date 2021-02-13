var person,person1
var r1,r2,r3,r4
var rock,roky
function preload(){
bag=loadImage("Aquaria1.jpg");
person=loadImage("Jack.png")
//rockk=loadImage("strip.png")
}
function setup(){
createCanvas(1800,1000)
person1=createSprite(1700,200,20,20);
person1.addImage(person)
person1.scale=(0.4)
roky = new Rock (700,60,10,10);
roky2 = new Rock (550,60,10,10);
roky3 = new Rock (300,60,10,10);
roky4= new Rock (1000,60,10,10);
roky5= new Rock (800,300,10,10);
roky6 = new Rock (400,300,10,10);
roky7 = new Rock (600,300,10,10);

roky.scale=(0.2)
roky2.scale=(0.3)
roky3.scale=(0.2)
roky4.scale=(0.3)
roky5.scale=(0.2)
roky6.scale=(0.3)
roky7.scale=(0.2)


edges=createEdgeSprites();

r1=new Rows(1100,1000/4,1700,10);
r2=new Rows(700,1000/2,1700,10);
r3=new Rows(1100,750,1700,10);
r4=new Rows(700,1000,1700,10);




}
function draw(){
background(bag)
if(keyIsDown(UP_ARROW)){
person1.y=person1.y-10

}
if(keyIsDown(LEFT_ARROW)){
    person1.x=person1.x-10
  person1.mirrorX(-1)
    }
    if(keyIsDown(DOWN_ARROW)){
        person1.y=person1.y+10

        }
        if(keyIsDown(RIGHT_ARROW)){
            person1.x=person1.x+10
            person1.mirrorX(1)
            
            }

person1.bounceOff(edges);



r1.display();
r2.display();
r3.display();
r4.display();
roky.display();
roky2.display();
roky3.display();
roky4.display();
roky5.display();
roky6.display();
roky7.display();



drawSprites()
}