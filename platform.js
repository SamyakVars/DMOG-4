class Platform{
    constructor(x, y, w, h, minVal1){
    
        this.collider = createSprite(x, y - minVal1, w, h)
        this.collider.visible = false
        this.collider.shapeColor = "red"

        this.sprite = createSprite(x, y, w, h)
        this.sprite.visible = false

        tgroup.add(this.sprite)
        collidergroup.add(this.collider)
        
    }
}