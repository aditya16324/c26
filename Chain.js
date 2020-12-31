class Chain{

    constructor(p,q){
     var options={
        bodyA:p,
        pointB:q
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);

}
display(){
line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)


}




}