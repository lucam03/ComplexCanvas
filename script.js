class ComplexNum {
  constructor(Re, Im) {
    this.Re = Re;
    this.Im = Im;
  }
  conjugate() {
    return new ComplexNum(this.Re, -this.Im)
  }
  modulus() {
    return (this.Re**2 + this.Im**2)**0.5
  }
  argument() {
    if (this.Re >= 0) {
      return Math.atan(this.Im/this.Re);
    } else {
      return this.Im >= 0 ? Math.atan(this.Im/this.Re) + Math.PI : Math.atan(this.Im/this.Re) - Math.PI;
    }
  }
}

function num(Re, Im) {
  return new ComplexNum(Re, Im);
}

function cMult(z, w) {
  return new ComplexNum(z.Re*w.Re-z.Im*w.Im, z.Im*w.Re+z.Re*w.Im);
}

function cAdd(z, w) {
  return new ComplexNum(z.Re+w.Re, z.Im+w.Im)
}

const inputField = document.querySelector("input");
const goButton = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const bgColour = "white";
const fgColour = "black";

function fillFunction(z) {
  return eval(inputField.value);
};


ctx.fillStyle = bgColour;
function clearCanvas() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateCanvas() {
  for (let x = 0; x < canvas.width; x++) {
    Re = x - Math.floor(canvas.width/2);
    for (let y = 0; y < canvas.height; y++) {
      Im = y - Math.floor(canvas.height/2);
      currentZ = new ComplexNum(Re, Im);
      if (fillFunction(currentZ)) {
        ctx.fillStyle = fgColour;
        ctx.fillRect(x, y, 1, 1);
        ctx.fillStyle = bgColour;
      }
    }
  }
}

clearCanvas();
updateCanvas();
