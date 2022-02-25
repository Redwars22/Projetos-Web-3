import { Logic } from './logic';

export class Data {
  saveData() {
    let shiftr: number = (document.getElementById('shiftr') as HTMLInputElement)
      .value;
    localStorage.setItem('shiftr', shiftr);
    let shiftd: number = (document.getElementById('shiftd') as HTMLInputElement)
      .value;
    localStorage.setItem('shiftd', shiftd);
    let blur: number = (document.getElementById('blur') as HTMLInputElement)
      .value;
    localStorage.setItem('blur', blur);
    let spread: number = (document.getElementById('spread') as HTMLInputElement)
      .value;
    localStorage.setItem('spread', spread);
    let color: string = (document.getElementById('color') as HTMLInputElement)
      .value;
    localStorage.setItem('color', color);
    let bgColor: string = (document.getElementById('backg') as HTMLInputElement)
      .value;
    localStorage.setItem('bgColor', bgColor);
  }

  openData() {
    (document.getElementById('shiftr') as HTMLInputElement).value =
      localStorage.getItem('shiftr');
    (document.getElementById('shiftd') as HTMLInputElement).value =
      localStorage.getItem('shiftd');
    (document.getElementById('blur') as HTMLInputElement).value =
      localStorage.getItem('blur');
    (document.getElementById('spread') as HTMLInputElement).value =
      localStorage.getItem('spread');
    (document.getElementById('color') as HTMLInputElement).value =
      localStorage.getItem('color');
    (document.getElementById('backg') as HTMLInputElement).value =
      localStorage.getItem('bgColor');
  }
}
