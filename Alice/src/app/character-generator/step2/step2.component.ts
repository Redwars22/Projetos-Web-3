import { Component } from '@angular/core';

@Component({
  selector: 'step2',
  templateUrl: `step2.component.html`,
  styleUrls: [`step2.component.css`],
})
export class Step2Of2Component {
  constructor() {}

  bloodTypes: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  villainOrHero: string[] = ['Vilão', 'Herói'];
  months: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  personalityTypes: string[] = [
    'ESTJ',
    'ENTJ',
    'ESFJ',
    'ENFJ',
    'ISTJ',
    'INFJ',
    'INTJ',
    'INFJ',
    'ESTP',
    'ESFP',
    'ENTP',
    'ENFP',
    'ISTP',
    'ISFP',
    'INTP',
    'INFP',
  ];
  occupations: string[] = [
    'Administração',
    'Direito',
    'Pedagogia',
    'Ciências Contábeis',
    'Engenharia Civil',
    'Recursos Humanos',
    'Enfermagem',
    'Psicologia',
    'Educação Física',
    'Engenharia de Software',
    'Gerência de Vendas',
    'Tecnologia da Informação',
    'Secretariado',
    'Motorista',
    'Designer',
    'Marketing',
    'Física',
    'Química',
    'Biologia',
    'Astronomia',
  ];
  hobbies: string[] = [
    'escrever',
    'filmes',
    'anime',
    'viajar',
    'estudar',
    'desenhar',
    'cozinhar',
    'programar',
    'gravar vídeos',
    'pintar',
    'passear',
    'correr',
    'comprar',
    'cuidar de animais',
    'horóscopo',
    'redes sociais',
  ];

  isVillainOrHero() {
    let choice: number = Math.floor(Math.random() * 10);
    if (choice < 5) {
      return this.villainOrHero[0];
    } else {
      return this.villainOrHero[1];
    }
  }

  getHeight() {
    let height: number = Math.random() * 2.1;

    while (height < 0.5) {
      height = Math.random() * 2.1;
    }

    return height.toFixed(2) + ' m';
  }

  getBirthday() {
    let month: number = Math.floor(Math.random() * 12);
    let day: number = Math.floor(Math.random() * 31);

    if (day == 0) day = 1;

    switch (month) {
      case 1:
        if (day > 28) day = 28;
      case 3 || 5 || 8 || 10:
        if (day > 30) day = 30;
      default:
        break;
    }

    return day.toString() + ' de ' + this.months[month];
  }

  getPersonality() {
    let pers_index: number = Math.floor(Math.random() * 16);
    return this.personalityTypes[pers_index];
  }

  getBloodType() {
    let btype: number = Math.floor(Math.random() * 7);
    return this.bloodTypes[btype];
  }

  getAge() {
    let age: number = Math.floor(Math.random() * 150);
    return age.toString() + ' anos';
  }

  getOccupation() {
    let occ_index: number = Math.floor(Math.random() * 20);
    return this.occupations[occ_index];
  }

  getHobbies() {
    let hobbie_string: string = '';
    let hob_index: number;

    for (let i = 0; i < 2; i++) {
      hob_index = Math.floor(Math.random() * this.hobbies.length);
      hobbie_string += this.hobbies[hob_index];
      if (i == 0) hobbie_string += ', ';
    }

    return hobbie_string;
  }

  getRandomCharacter() {
    (document.getElementById('bloodtype') as HTMLInputElement).value =
      this.getBloodType();
    (document.getElementById('birthday') as HTMLInputElement).value =
      this.getBirthday();
    (document.getElementById('height') as HTMLInputElement).value =
      this.getHeight();
    (document.getElementById('type') as HTMLInputElement).value =
      this.isVillainOrHero();
    (document.getElementById('personality') as HTMLInputElement).value =
      this.getPersonality();
    (document.getElementById('age') as HTMLInputElement).value = this.getAge();
    (document.getElementById('occupation') as HTMLInputElement).value =
      this.getOccupation();
    (document.getElementById('hobbies') as HTMLInputElement).value =
      this.getHobbies();
  }
}
