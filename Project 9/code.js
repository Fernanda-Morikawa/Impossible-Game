var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c7101c90-0606-4f9a-ab67-b4ed75a93f2a","a51025df-d37f-49bd-a3c7-69ab2c732bcd","724e4df9-c77c-4296-90ae-2e5553be599d","bac042cc-0e7d-4778-9b4c-cd7d4294a180","44247c7a-c78f-4c88-a5e9-ec3c089eeb8a"],"propsByKey":{"c7101c90-0606-4f9a-ab67-b4ed75a93f2a":{"name":"B","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"qhW4tA4pDMgrLzBif4PRYd.XzD7YohDe","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c7101c90-0606-4f9a-ab67-b4ed75a93f2a.png"},"a51025df-d37f-49bd-a3c7-69ab2c732bcd":{"name":"Ship_1","sourceUrl":null,"frameSize":{"x":224,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"WmscrUn7Tp79Vn3N3ywDtAPWuIQ6BmoB","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":224},"rootRelativePath":"assets/a51025df-d37f-49bd-a3c7-69ab2c732bcd.png"},"724e4df9-c77c-4296-90ae-2e5553be599d":{"name":"bomb1","sourceUrl":"assets/api/v1/animation-library/gamelab/4VzcditYIaaf0.l3_P3qntupPmHANSFg/category_video_games/gameplayobject_item_01.png","frameSize":{"x":346,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4VzcditYIaaf0.l3_P3qntupPmHANSFg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4VzcditYIaaf0.l3_P3qntupPmHANSFg/category_video_games/gameplayobject_item_01.png"},"bac042cc-0e7d-4778-9b4c-cd7d4294a180":{"name":"bomb2","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"},"44247c7a-c78f-4c88-a5e9-ec3c089eeb8a":{"name":"bomb3","sourceUrl":"assets/api/v1/animation-library/gamelab/0dmA2HBoTVtQiYd04vSDPAx.o8oJcZfH/category_video_games/gameplayadventure_05.png","frameSize":{"x":336,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"0dmA2HBoTVtQiYd04vSDPAx.o8oJcZfH","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0dmA2HBoTVtQiYd04vSDPAx.o8oJcZfH/category_video_games/gameplayadventure_05.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var a = createSprite(200, 200);
a.setAnimation("B");

var Ship = createSprite(200, 345, 30, 50);
Ship.shapeColor = "red";
Ship.setAnimation("Ship_1");
Ship.scale=0.3;

var enemy1 = createSprite(20, 250, 10, 10);
enemy1.shapeColor = "red";
enemy1.setAnimation("bomb1");
enemy1.scale=0.1;

var enemy2 = createSprite(380, 160, 10, 10);
enemy2.shapeColor = "red";
enemy2.setAnimation("bomb2");
enemy2.scale=0.1;

var enemy3 = createSprite(20, 70, 10, 10);
enemy3.shapeColor = "red";
enemy3.setAnimation("bomb3");
enemy3.scale=0.1;



var net = createSprite(200, 5, 200, 20);
net.shapeColor = "red";

var death=0;


enemy1.velocityX = -13;
enemy1.velocityX = +13;

enemy2.velocityX = +13;
enemy2.velocityX = -13;

enemy3.velocityX = -13;
enemy3.velocityX = +13;


function draw() {
 
 if(Ship.isTouching(enemy1)||Ship.isTouching(enemy2)||Ship.isTouching(enemy3)){
playSound("assets/category_explosion/8bit_explosion.mp3");
}


if(keyDown("UP_ARROW")){
  Ship.y = Ship.y -3;
}

if(keyDown("DOWN_ARROW")){
  Ship.y = Ship.y +3;
}

if(keyDown("LEFT_ARROW")){
  Ship.x = Ship.x -3;
}

if(keyDown("RIGHT_ARROW")){
  Ship.x = Ship.x +3;
}


if(Ship.isTouching(enemy1)||Ship.isTouching(enemy2)||Ship.isTouching(enemy3)){
  Ship.x = 200;
  Ship.y = 350;
  death = death+1;
}


createEdgeSprites();
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
Ship.bounceOff(leftEdge);
Ship.bounceOff(rightEdge);
Ship.bounceOff(bottomEdge);






drawSprites();
 fill("Lightgreen");
 textSize(18);
 text("Deaths:"+death, 20, 350);
 
 if(Ship.isTouching(net)){
   
fill("White");
textSize(40);
text("You Win!", 160, 250);
  
enemy1.velocityX = 0;
enemy1.velocityX = 0;

enemy2.velocityX = 0;
enemy2.velocityX = 0;

enemy3.velocityX = 0;
enemy3.velocityX = 0;



}
 
 
 
}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
