//Terreno
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

//Buzo
AFRAME.registerComponent("buzo-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      // Obtener los datos de los atributos
      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var buzoRotation = this.data.speedOfRotation;
      var buzoPosition = this.data.speedOfAscent;

      // Controlar los atributos con las flechas del teclado
      if (e.key === "ArrowRight") {
        if (buzoRotation.x < 10) {
          buzoRotation.x += 0.5;
          this.el.setAttribute("rotation", buzoRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (buzo.x > -10) {
          buzo.x -= 0.5;
          this.el.setAttribute("rotation", buzoRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (buzoRotation.z < 20) {
          buzoRotation.z += 0.5;
          this.el.setAttribute("rotation", buzoRotation);
        }
        if (buzoPosition.y < 2) {
          buzoPosition.y += 0.01;
          this.el.setAttribute("position", buzoPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (buzoRotation.z > -10) {
          buzoRotation.z -= 0.5;
          this.el.setAttribute("rotation", buzoRotation);
        }
        if (buzoPosition.y > -2) {
          buzoPosition.y -= 0.01;
          this.el.setAttribute("position", buzoPosition);
        }
      }
    });
  },
});
  