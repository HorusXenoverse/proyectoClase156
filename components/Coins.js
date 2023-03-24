AFRAME.registerComponent("coin",{
    init: function(){
        for(var i = 1; i <= 10; i++ ){
            var id = `coin${i}`

            var posX = Math.floor(Math.random() *100 + -50)
            var posY =  Math.floor(Math.random()*5 +5)
            var posZ = Math.floor(Math.random()*60 + -40)

            var position = { x: posX, y: posY, z: posZ }
            this.createCoins(id, position)
        }
    },
    createCoins: function(id, position){
        var coinTerrain = document.querySelector("#island")
        var coinEl = document.createElement("a-entity")
        coinEl.setAttribute("id", id)
        coinEl.setAttribute("position", position)
        coinEl.setAttribute("scale", {x: 5, y: 5, z: 5})
        coinEl.setAttribute("gltf-model", "./models/stylized_coin/scene.gltf")
        coinEl.setAttribute("animation-mixer", {})

        coinEl.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        coinEl.setAttribute("hitbox", {elementCollider: `#${id}`})

        coinEl.setAttribute("animation",{
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })

        coinTerrain.appendChild(coinEl)
        
    }


})