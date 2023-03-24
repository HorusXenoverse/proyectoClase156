AFRAME.registerComponent("buzorotation",{
    schema: {
        pos : {type: "number", default: 0},
        rot : {type: "number", default: 0}
    },
    init : function(){
        window.addEventListener("keydown", (e)=>{
        this.data.pos = this.el.getAttribute("position")
        this.data.rot = this.el.getAttribute("rotation")
        var positionValue = this.data.pos
        var rotationValue = this.data.rot
        if (e.key === "ArrowRight"){
            if (rotationValue.x < 10){
                rotationValue.x = rotationValue.x + 0.5
                this.el.setAttribute("rotation", rotationValue)
            }
        }

        if(e.key === "ArrowLeft"){
            if (rotationValue.x > -10){
                rotationValue.x -= 0.5
                this.el.setAttribute("rotation", rotationValue) 
            }
        }

        if(e.key === "ArrowUp"){
            if(positionValue.y < 2){
                positionValue.y += 0.01
                this.el.setAttribute("position", positionValue) 
            }
            if(rotationValue.z < 20){
                rotationValue.z += 0.5
                this.el.setAttribute("rotation", rotationValue) 
            }
        }

        if(e.key === "ArrowDown"){
            if(positionValue.y > -2){
                positionValue.y -= 0.01
                this.el.setAttribute("position", positionValue) 
            }
            if(rotationValue.z > -20){
                rotationValue.z -= 0.5
                this.el.setAttribute("rotation", rotationValue)
            }
        }

        })
    }
    
}
)