import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: String = 'Angular con Spring 5';
  alumno: String = 'Patricio Lerzundi';

}
