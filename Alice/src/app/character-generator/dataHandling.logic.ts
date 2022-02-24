export class DataHandling {
  save() {
    localStorage.setItem(
      'name',
      (document.getElementById('name') as HTMLInputElement).value
    );
    localStorage.setItem(
      'age',
      (document.getElementById('age') as HTMLInputElement).value
    );
    localStorage.setItem(
      'personality',
      (document.getElementById('personality') as HTMLInputElement).value
    );
    localStorage.setItem(
      'gender',
      (document.getElementById('gender') as HTMLInputElement).value
    );
    localStorage.setItem(
      'height',
      (document.getElementById('height') as HTMLInputElement).value
    );
    localStorage.setItem(
      'bloodtype',
      (document.getElementById('bloodtype') as HTMLInputElement).value
    );
    localStorage.setItem(
      'occupation',
      (document.getElementById('occupation') as HTMLInputElement).value
    );
    localStorage.setItem(
      'birthday',
      (document.getElementById('birthday') as HTMLInputElement).value
    );
    localStorage.setItem(
      'type',
      (document.getElementById('type') as HTMLInputElement).value
    );
  }

  open() {
    (<HTMLInputElement>document.getElementById('name')).value =
      localStorage.getItem('name');
    (<HTMLInputElement>document.getElementById('age')).value =
      localStorage.getItem('age');
    (<HTMLInputElement>document.getElementById('personality')).value =
      localStorage.getItem('personality');
    (<HTMLInputElement>document.getElementById('gender')).value =
      localStorage.getItem('gender');
    (<HTMLInputElement>document.getElementById('height')).value =
      localStorage.getItem('height');
    (<HTMLInputElement>document.getElementById('bloodtype')).value =
      localStorage.getItem('bloodtype');
    (<HTMLInputElement>document.getElementById('occupation')).value =
      localStorage.getItem('occupation');
    (<HTMLInputElement>document.getElementById('birthday')).value =
      localStorage.getItem('birthday');
    (<HTMLInputElement>document.getElementById('type')).value =
      localStorage.getItem('type');
  }

  emptyFields() {
    (<HTMLInputElement>document.getElementById('name')).value = '';
    (<HTMLInputElement>document.getElementById('age')).value = '';
    (<HTMLInputElement>document.getElementById('gender')).value = '';
    (<HTMLInputElement>document.getElementById('personality')).value = '';
    (<HTMLInputElement>document.getElementById('type')).value = '';
    (<HTMLInputElement>document.getElementById('height')).value = '';
    (<HTMLInputElement>document.getElementById('bloodtype')).value = '';
    (<HTMLInputElement>document.getElementById('occupation')).value = '';
    (<HTMLInputElement>document.getElementById('birthday')).value = '';
  }

  delete() {
    this.emptyFields();
    localStorage.removeItem('name');
    localStorage.removeItem('age');
    localStorage.removeItem('gender');
    localStorage.removeItem('personality');
    localStorage.removeItem('type');
    localStorage.removeItem('height');
    localStorage.removeItem('bloodtype');
    localStorage.removeItem('birthday');
  }
}
