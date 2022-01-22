import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../content/header.component.html',
  styleUrls: ['../style/header.style.css'],
})
export class HeaderComponent {
  saveData() {
    let colorsLibrary = document.getElementById('library-items').innerHTML;
    localStorage.setItem('colors', colorsLibrary);
  }

  retrieveData() {
    document.getElementById('library-items').innerHTML =
      localStorage.getItem('colors');
  }

  deleteAllData() {
    let toDeleteOrNot = confirm(
      'Tem certeza de que deseja deletar todas as cores da memória? AVISO: ESSE PROCESSO É IRREVERSÍVEL!!'
    );

    if (toDeleteOrNot) {
      localStorage.removeItem('colors');
      document.getElementById('library-items').innerHTML = '';
    }
  }

  feedbackButton() {
    window.open('mailto:andrewpereira.megabyte@gmail.com');
  }

  helpWindow() {
    window.open(
      'https://redwars22.notion.site/Ajuda-do-Project-Landfall-c7a6d7ff51f048ccba03411ac1021a4a'
    );
  }

  aboutBox() {
    window.alert(
      'ProjectLandfall. Criado por André Pereira(@Redwars22) usando CSS, Angular e Material Icons. Fonte da interface: JetBrains Mono'
    );
  }
}
