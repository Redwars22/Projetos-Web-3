import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: '../content/main.component.html',
  styleUrls: ['../style/main.style.css'],
})
export class MainComponent {
  previewColor() {
    let colorToPreview = (
      document.getElementById('hex-code-field') as HTMLInputElement
    ).value;
    document.getElementById('color-preview').style['background-color'] =
      colorToPreview;
    document.getElementById('color-code-show').innerText = colorToPreview;
  }

  addColorItem() {
    let color = (document.getElementById('hex-code-field') as HTMLInputElement)
      .value;
    let description = (
      document.getElementById('label-field') as HTMLInputElement
    ).value;
    let id: number = Math.round(Math.random() * 10000);
    document.getElementById('library-items').innerHTML +=
      "<div class='container'><div class='color-prev-box id-" +
      id.toString() +
      "'></div>" +
      '<style> .id-' +
      id.toString() +
      '{ background-color: ' +
      color +
      '; width: 50px; height: 50px; border-radius: 5px; margin: 10px;}</style><strong>' +
      color +
      '</strong><br/><small>' +
      description +
      '</small></div>';
  }

  addColor() {
    if (
      (document.getElementById('hex-code-field') as HTMLInputElement).value !=
      ''
    ) {
      this.addColorItem();
    } else {
      window.alert('OOPS... VOCÊ SE ESQUECEU DO CÓDIGO HEX!!!');
    }
  }
}
