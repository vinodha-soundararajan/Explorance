import { Component, NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _users: User[];

  name: string;
  family: string;
  itemNum;
  birthday;
  editingIndex: number;

  constructor() {
    this._users = [
      new User('Ali', 'Delshad', 0),
      new User('Hamid', 'Sadeghi', 0),
      new User('Amir', 'Olfat', 0),
      new User('Keyvan', 'Nasr', 0)
    ]
  }



  get users(): User[] {
    return this._users;
  }

  delete(index: number) {
    this._users.splice(index, 1);
  }

  setEditUser(index: number): void {
    this.editingIndex = index;
    this.name = this._users[index].name;
    this.family = this._users[index].family;
    this.itemNum = this._users[index].itemNum;
    this.birthday = this._users[index].birthday;
  }

  edit(): void {

    // var modal = document.getElementById('addModal');
    // const div = document.querySelector('.modal-backdrop');
    // div.classList.remove("modal-backdrop")
    // modal.style.display = "none";
    document.getElementById('close').click();

    this._users[this.editingIndex] = new User(this.name, this.family, this.itemNum, this.birthday);
    this.editingIndex = undefined;
    this.name = "";
    this.family = "";
    this.itemNum = 0;
    this.birthday = "";
  }

  add(): void {
    this._users.push(new User(this.name, this.family, this.itemNum, this.birthday));
    this.name = "";
    this.family = "";
    this.itemNum = 0;
    this.birthday = "";
  }
}

export class User {
  private _name: string;
  private _family: string;
  private _itemNum: number;
  private _birthday: LocalDate;

  constructor(name: string, family: string, itemNum?: number, birthday?: LocalDate) {
    this._name = name;
    this._family = family;
    this._itemNum = itemNum
    this._birthday = birthday;
  }

  get name(): string {
    return this._name;
  }

  get family(): string {
    return this._family;
  }

  get itemNum(): number {
    return this._itemNum;
  }

  get birthday(): LocalDate {
    return this._birthday;
  }
}

export interface LocalDate {
  day: number;
  month: number;
  year: number;
}
