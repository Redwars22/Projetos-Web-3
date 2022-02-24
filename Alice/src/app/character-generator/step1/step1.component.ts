import { Component } from '@angular/core';
import { Step2Of2Component } from '../step2/step2.component';

@Component({
  selector: 'step1',
  templateUrl: `step1.component.html`,
  styleUrls: [`step1.component.css`],
})
export class Step1of2Component {
  step2 = new Step2Of2Component();
  setGender(_gender: string) {
    /*(document.querySelector('.step2') as HTMLElement).style['filter'] =
      'saturate(100%)';*/
    /*(document.querySelector('.step1') as HTMLElement).style['filter'] =
      'saturate(0%)';*/
    (document.getElementById('gender') as HTMLInputElement).value = _gender;
    this.step2.getRandomCharacter();
  }
}
