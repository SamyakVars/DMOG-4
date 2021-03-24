class lvl1{
    constructor(){
        this.storylineBool = true
        this.storylinePart = 0

        this.w = windowWidth
        this.h = windowHeight

        this.touchGround = true

        this.p1 = new Platform(310, this.h / 1.25, 650, this.h / 360, 0.5)
        this.p2 = new Platform(760, this.h / 1.25, 130, this.h / 360, 0.5)
        this.p3 = new Platform(950, this.h / 1.33, 130, this.h / 360, 0.5)
        this.p4 = new Platform(1085, this.h / 1.33, 25, this.h / 360, 0.5)
        this.p5 = new Platform(1350, this.h / 1.33, 410, this.h / 360, 0.5)


        this.storyp1 = loadImage("Images/Speeches/Speech1.png")
        this.storyp2 = loadImage("Images/Speeches/Speech2.png")
        this.storyp3 = loadImage("Images/Speeches/Speech3.png")
        this.storyp4 = loadImage("Images/Speeches/Speech4.png")
        this.storyp5 = loadImage("Images/Speeches/Speech5.png")
        this.storyp6 = loadImage("Images/Speeches/Speech6.png")
        this.storyp7 = loadImage("Images/Speeches/Speech7.png")

        this.panimation = loadAnimation("Images/Dyso/Move/red/r1.png", "Images/Dyso/Move/red/r2.png", "Images/Dyso/Move/red/r3.png", "Images/Dyso/Move/red/r4.png", "Images/Dyso/Move/red/r5.png", "Images/Dyso/Move/red/r6.png", "Images/Dyso/Move/red/r7.png", "Images/Dyso/Move/red/r8.png")
        this.pidle = loadAnimation("Images/Dyso/Move/red/Idle.png")
        this.pdeath = loadAnimation("Images/Dyso/Other/d1.png", "Images/Dyso/Other/d2.png", "Images/Dyso/Other/d3.png", "Images/Dyso/Other/d4.png", "Images/Dyso/Other/d5.png", "Images/Dyso/Other/d6.png", "Images/Dyso/Other/d7.png", "Images/Dyso/Other/d8.png", "Images/Dyso/Other/d9.png", "Images/Dyso/Other/d10.png")
        this.pdeath.looping = false
        this.pjump = loadAnimation("Images/Dyso/Move/red/j1.png", "Images/Dyso/Move/red/j2.png", "Images/Dyso/Move/red/j3.png", "Images/Dyso/Move/red/j4.png", "Images/Dyso/Move/red/j5.png", "Images/Dyso/Move/red/j6.png", "Images/Dyso/Move/red/j7.png", "Images/Dyso/Move/red/j8.png", "Images/Dyso/Move/red/j9.png", "Images/Dyso/Move/red/j10.png")

        this.moveInstruct = loadImage("Images/AD to move.png")
        this.moveInVis = 0

        this.jumpInstruct = loadImage("Images/Spacebar to jump.png")
        this.jumpInVis = 0


        this.ground = createSprite(this.w / 2, this.h - this.h / 20, this.w, this.h / 10)
        this.ground.visible = false

        this.groundCollider = createSprite(this.w * 0.5, this.h - this.h / 20 - 3, this.w, this.h / 10)
        this.groundCollider.visible = false

        this.leftCollider = createSprite(displayWidth / 6, this.h / 2, displayWidth / 3.06, this.h)
        this.leftCollider.visible = false

        this.lWall = createSprite(-1 * displayWidth / 6.5, this.h, this.w / 3, this.h)
        this.lWall.visible = false

        collidergroup.add(this.groundCollider)
        tgroup.add(this.ground)

        this.player = new Plr(50, 610, this.pidle, this.panimation, this.pjump, this.pdeath)

        this.storylineBg = createSprite(this.w / 2, this.h / 2, this.w, this.h)
        this.storylineBg.visible = false

        this.storyline = createSprite(this.w / 2 - this.w / 15  , this.h / 4 + this.h / 25, this.w, this.h / 2)
        this.storyline.scale = 0.8

        this.continueStory = true

        this.gyo1 = new Enemy(1500, this.h / 1.45)
        this.testGyo = new Enemy(300, 600)

        this.cameraPlus = 0
        this.leftcameraPlus = 0
        this.gameState = true

        this.camX = displayWidth

        this.screen = createSprite(camera.position.x, this.h / 2, this.w, this.h)
        this.screen.shapeColor = "black"
        this.screen.visible = false
        
        this.GO = createSprite(this.w / 2, this.h / 3, 20, 20)
        this.GOimg = loadImage("Images/GO.png")
        this.GO.visible = false
        this.GO.addImage(this.GOimg)

        this.retry = createSprite(this.w / 2, this.h / 1.6, 20, 20)
        this.retryImg = loadImage("Images/retry.png")
        this.retry.addImage(this.retryImg)
        this.retry.visible = false
        this.retry.scale = 0.4

        this.pointer = createSprite(50, this.h / 1.3, 20, 20)
        this.pImg = loadImage("Images/pointer.png")
        this.pointer.addImage(this.pImg)
        this.pointer.visible = false

        this.dislayGO = false


        this.lSprite = createSprite(this.w / 2.5, this.h / 1.55, 70, 50)
        this.rSprite = createSprite(this.w / 1.7, this.h / 1.55, 70, 50)
        this.lSprite.visible = false
        this.rSprite.visible = false

        this.checkAnimation = false

        camera.position.x = windowWidth / 2
        camera.position.y = windowHeight / 2

    }


    play(){
        this.player.plr.collide(tgroup)
        this.ground.x = camera.position.x
        this.groundCollider.x = camera.position.x
        this.w = camera.position.x  + this.camX / 2
        this.lSprite.x = camera.position.x - this.camX / 10
        this.rSprite.x = camera.position.x + this.camX / 10

        this.player.plr.collide(this.lWall)

        

        if(this.player.plr.isTouching(obgroup)){
            this.player.plr.changeAnimation("death", this.pdeath)
            this.player.plr.animation.play()
            this.checkAnimation = true
        }

        if(this.checkAnimation){
            if(this.player.plr.animation.getFrame() == this.player.plr.animation.getLastFrame()){
                

                setTimeout(() => {
                    this.displayGO = true
                    this.player.plr.animation.rewind()}, 300)
                
            }
        }

        image(bg, 0, 0, 4700, this.h)

        if(this.gameState){

            this.gyo1.move(1150, 1500)

            this.screen.visible = false
            this.GO.visible = false
            this.retry.visible = false


        if(this.storylineBool){

            if(keyIsDown(32) && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false
            }
            

            if(keyWentUp(32)){
                this.continueStory = true
            }
    
            if(this.storylinePart == 0){
                this.storyline.addImage(this.storyp1)
            }else if(this.storylinePart == 1){
                this.storyline.addImage(this.storyp2)
            }else if(this.storylinePart == 2){
                this.storyline.addImage(this.storyp3)
            }else if(this.storylinePart == 3){
                this.storyline.addImage(this.storyp4)
            }else if(this.storylinePart == 4){
                this.storyline.addImage(this.storyp5)
            }else if(this.storylinePart == 5){
                this.storyline.addImage(this.storyp6)
            }else if(this.storylinePart == 6){
                this.storyline.addImage(this.storyp7)
            }else if(this.storylinePart > 6){
                this.storyline.destroy()
                this.storylineBool = false
            }

        }else{

            this.checkAnimation = false
            this.displayGO = false

            if(collidergroup.isTouching(this.player.plr)){
                this.touchGround = true
            }

            if(obgroup.isTouching(this.player.plr)){
                  this.gameState = false
            }
              
              this.gyo1.collision(this.player.plr)
              this.testGyo.collision(this.player.plr)
    
              
            if(keyDown("LEFT_ARROW") || keyDown(65)){
               this.player.plr.x -= 4
               this.player.plr.changeAnimation("run", panimation)
               this.player.plr.mirrorX(-1)
               camera.position.x -= this.leftcameraPlus
            }else if(keyDown("RIGHT_ARROW") || keyDown(68)){
               this.player.plr.x += 4
                this.player.plr.changeAnimation("run", panimation)
                this.player.plr.mirrorX(1)
                camera.position.x += this.cameraPlus
            }else if(keyDown("UP_ARROW") && this.touchGround && this.player.plr.isTouching(tgroup) == false|| keyDown(32) && this.touchGround && this.player.plr.isTouching(tgroup) == false){
               this.player.plr.velocityY = -12
               this.touchGround = false
               this.player.plr.changeAnimation("jump", pjump)
            }else{
                 this.player.plr.changeAnimation("idle", pidle)
            }
            
            if(this.touchGround != true){
               this.player.plr.changeAnimation("jump", pjump)
            }
            
             this.player.plr.velocityY = this.player.plr.velocityY + 0.8

             if(this.player.plr.x > this.w / 2 - this.w / 100){
                 this.cameraPlus = 4
             }else if(this.player.plr.x < this.w / 2){
                this.cameraPlus = 0
             }

             if(this.player.plr.x > this.w / 3){
                 this.leftcameraPlus = 0
             }else if(this.player.plr.x <= this.w / 3 && this.player.plr.isTouching(this.leftCollider) == false){
                 this.leftcameraPlus = 4
             }else if(this.player.plr.isTouching(this.leftCollider)){
                 this.leftcameraPlus = 0
             }
             

                if(this.player.plr.x > 0){
                    push()
                    tint(255, this.moveInVis)
                    image(this.moveInstruct, displayWidth / 50, this.h / 1.5, displayWidth / 8.5, this.h / 36)
                    this.moveInVis += 4
                    pop()
                }  

                if(this.player.plr.x > this.w / 3){
                    push()
                    tint(255, this.jumpInVis)
                    image(this.jumpInstruct, displayWidth / 2.3, this.h / 1.5, displayWidth / 6.4, this.h / 36)
                    this.jumpInVis += 4
                    pop()
                }else{
                    this.jumpInVis = 0
                }         
            }

        }else if(this.gameState == false)

        this.GO.x = camera.position.x
        this.retry.x = camera.position.x
        this.screen.x = camera.position.x

            var changePressed = true


            if(this.displayGO && this.gameState == false){
                this.screen.visible = true
                this.GO.visible = true
                this.retry.visible = true

                if(mousePressedOver(this.lSprite)){
                    this.gameState = true
                    camera.position.x = this.camX / 2
                    this.player.plr.x = 50
                    this.player.plr.y = 530

                    this.screen.visible = false
                    this.GO.visible = false
                    this.retry.visible = false

                    this.lSprite.visible = false
                    this.rSprite.visible = false

                    this.moveInVis = 0

                    this.gyo1.move(1150, 1500)
                    this.gyo1.startOver()
                    this.testGyo.startOver()
                    this.testGyo.gyo.x = 300

                    this.player.plr.animation.goToFrame(0)


                    camera.position.x = windowWidth / 2
                    camera.position.y = windowHeight / 2

                    

                    
                }else if(mousePressedOver(this.rSprite) && this.rightPressed){
                    window.close()
                }
            }
        }
    }

   
