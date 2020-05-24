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
    return Math.atan(this.Im/this.Re);
  }
}

function complexMult(z, w) {
  return new ComplexNum(z.Re*w.Re-z.Im*w.Im, z.Im*w.Re+z.Re*w.Im);
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

bgColour = "white";
fgColour = "black";

function fillFunction(num) {
  return num.modulus()%5 > 1
};


ctx.fillStyle = bgColour;
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let x = 0; x < canvas.width; x++) {
  Re = x - Math.floor(canvas.width/2);
  for (let y = 0; y < canvas.height; y++) {
    Im = y - Math.floor(canvas.height/2);
    currentNum = new ComplexNum(Re, Im);
    if (fillFunction(currentNum)) {
      ctx.fillStyle = fgColour;
      ctx.fillRect(x, y, 1, 1);
      ctx.fillStyle = bgColour;
    }
  }
}
