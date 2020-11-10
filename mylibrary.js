function bounceOff(giraffe,mango) {
 
    if (giraffe.x - mango.x < mango.width/2 + giraffe.width/2
      && mango.x - giraffe.x < mango.width/2 + giraffe.width/2) {
        giraffe.velocityX = giraffe.velocityX * (-1);
        mango.velocityX = mango.velocityX * (-1);
  }
  if (giraffe.y - mango.y < mango.height/2 + giraffe.height/2
    && mango.y - giraffe.y < mango.height/2 + giraffe.height/2){
      giraffe.velocityY = giraffe.velocityY * (-1);
      mango.velocityY = mango.velocityY * (-1);
  }
  
  }
  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }