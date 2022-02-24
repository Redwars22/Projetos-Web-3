import { Component } from '@angular/core';
import { DataHandling } from '../character-generator/dataHandling.logic';

@Component({
  selector: 'app-header',
  templateUrl: `header.component.html`,
  styleUrls: [`header.component.css`],
})
export class HeaderComponent {
  data = new DataHandling();

  saveData() {
    this.data.save();
  }

  retrieveData() {
    this.data.open();
  }

  deleteAll() {
    let toDeleteOrNot = confirm(
      'Tem certeza de que deseja deletar tudo? É IRREVERSÍVEL ;)'
    );
    if (toDeleteOrNot) this.data.delete();
  }

  /*getHelp() {
    window.open(
      'https://redwars22.notion.site/Guia-de-Ajuda-35f728f46f534328bd6362b532903f16'
    );
  }*/

  getSourceCode() {
    window.open('https://github.com/Redwars22/Projetos-Web-3');
  }

  reportBug() {
    window.open('mailto:leoandrew@vivaldi.net');
  }

  moreProjects(){
    window.open("https://redwars22.github.io/Projetos-Web-3/");
  }
}
