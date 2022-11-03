import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TestApp'; // property
  name: any; // any herhangi bir tip yan tarafındaki atamaya göre değişiklik gösterir.
  show:boolean = false;

  names: any[] = [
    { name: 'ali', surname: 'tan' },
    { name: 'ahmet', surname: 'tan2' }
  ]

  cities:any[] = ['izmir','kocaeli','istanbul']
  selectedCity = 'izmir';
  disabled:boolean = false;


  showAlert(): void { // method
    alert('asdsad')
  }

  getName(): string {
    return "name";
  }
}
