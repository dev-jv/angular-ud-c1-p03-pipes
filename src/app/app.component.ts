import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-ud-c1-p03-pipes';
  name = 'Walter Bishop';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  fringe = ['Precognition', 'Psichokinesis', 'Teleportation', 'Nanotechnology', 'Artificial Intelligence', 'Precognition', 'Dark Matter', 'Cybernetics'];
  PI: number = Math.PI;
}
