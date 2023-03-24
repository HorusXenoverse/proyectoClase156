AFRAME.registerComponent("hitbox",{
    schema:{
        elementCollider:{type: "string", default: "#coin1"}
    },
    update: function(){
        this.collider(this.data.elementCollider)
    },

    init: function () {
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl);
      },
    
      startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
        setInterval(
    
         ()=> {
          if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timerEl.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.gameOver()        
          }
        }, 1000
    
        )
      },
    collider: function(elementCollider){
        const elementDesider = document.querySelector(elementCollider)
        elementDesider.addEventListener("collide", (e)=>{
            if (elementCollider.includes("#fish")){
                console.log("Colisionó con fish")
                
            } else if(elementCollider.includes("#coin")){
                console.log("Colisionó con coin")
            }
        })
    },

    updateObjects: function(){
        var elementText = document.querySelector("#targets")
        var elementTextEspecific = elementText.getAttribute("text").value
        var textValue = parseInt(elementTextEspecific)
        textValue -= 1
        elementText.setAttribute("text", {value: textValue})
      },
    
      updateScore: function(){
        var elementScore = document.querySelector("#score")
        var elementScoreEspecific = elementScore.getAttribute("text").value
        var scoreValue = parseInt(elementScoreEspecific)
        scoreValue += 50
        elementScore.setAttribute("text", {value: scoreValue})
      },
    
      gameOver: function(){
        var elementPlane = document.querySelector("#buzo")
        var elementText = document.querySelector("#gameOver")
        elementText.setAttribute("visible", true)
        elementPlane.setAttribute("dynamic-body", {mass: 1})
      }
      


})
