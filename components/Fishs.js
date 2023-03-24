AFRAME.registerComponent("fish",{
    init: function(){
        for(var index = 1; index <= 10; index++){
            var fishX = Math.floor(Math.random()*100 + -50)
            var fishY = Math.floor(Math.random()*18 +5)
            var fishZ = Math.floor(Math.random()*90 + -40)
    
            var fishID = `fish${index}`
            var fishPosition = {x: fishX, y: fishY, z: fishZ}
    
            this.createFish(fishID, fishPosition)
        }
    },
    
    createFish: function(id, position){
        var fishTerrain = document.querySelector("#island")
        var fishEl = document.createElement("a-entity")
        fishEl.setAttribute("id", id)
        fishEl.setAttribute("position", position)
        fishEl.setAttribute("scale", {x: 0.22, y: 0.22, z: 0.22})
        fishEl.setAttribute("gltf-model", "./models/fish/scene.gltf")
        fishEl.setAttribute("animation-mixer", {})

        fishEl.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        fishEl.setAttribute("hitbox", {elementCollider: `#${id}`})

        fishTerrain.appendChild(fishEl)
    
        
    }
})