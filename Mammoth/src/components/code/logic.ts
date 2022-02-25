export class Logic {
  applyEffects() {
    let shiftr: number = (document.getElementById('shiftr') as HTMLInputElement)
      .value;
    let shiftd: number = (document.getElementById('shiftd') as HTMLInputElement)
      .value;
    let blur: number = (document.getElementById('blur') as HTMLInputElement)
      .value;
    let spread: number = (document.getElementById('spread') as HTMLInputElement)
      .value;
    let color: string = (document.getElementById('color') as HTMLInputElement)
      .value;
    let bgColor: string = (document.getElementById('backg') as HTMLInputElement)
      .value;
    let styleString: string =
      shiftr.toString() +
      'px ' +
      shiftd.toString() +
      'px ' +
      blur.toString() +
      'px ' +
      spread.toString() +
      'px ' +
      color;
    console.log(styleString);
    document.getElementById('box').style.boxShadow = styleString;
    document.getElementById('box').style.backgroundColor = bgColor;
  }

  getCode() {
    let shiftr: number = (document.getElementById('shiftr') as HTMLInputElement)
      .value;
    let shiftd: number = (document.getElementById('shiftd') as HTMLInputElement)
      .value;
    let blur: number = (document.getElementById('blur') as HTMLInputElement)
      .value;
    let spread: number = (document.getElementById('spread') as HTMLInputElement)
      .value;
    let color: string = (document.getElementById('color') as HTMLInputElement)
      .value;
    let bgColor: string = (document.getElementById('backg') as HTMLInputElement)
      .value;
    let styleString: string =
      shiftr.toString() +
      'px ' +
      shiftd.toString() +
      'px ' +
      blur.toString() +
      'px ' +
      spread.toString() +
      'px ' +
      color;
    console.log(styleString);
    document.getElementById('code').innerText =
      'box-shadow: ' + styleString + ';';
  }
}
