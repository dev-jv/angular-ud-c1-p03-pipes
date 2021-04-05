import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-ud-c1-p03-pipes';
  name = 'Walter Bishop';
  nametivo = 'pohsiB retlaW';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  fringe = ['Precognition', 'Psichokinesis', 'Teleportation', 'Nanotechnology', 'Artificial Intelligence', 'Precognition', 'Dark Matter', 'Cybernetics'];
  PI: number = Math.PI;
  percentage: number = 0.235;
  slry: number = 1234.5;
  date: Date = new Date();

  lan: string = 'es';

  videoUrl: string = 'https://www.youtube.com/embed/p9dhf2Xnc68';

  state: boolean = false;
  btn: string = 'Disable';
  stt: string = 'Disabled';

  observer = {
    name: 'Donald',
    key: 'September',
    age: 500,
    future: {
      city: 'New York',
      year: 2167,
    }
  };

  valuePromise = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Data arrived!');
    }, 4500);
  });

  lang(x: string): any{
    this.lan = x;
    console.log(this.lan);
  }

  pass(): any {
    this.state = !this.state;
    if (this.state) {
      this.btn = 'Disable';
      this.stt = 'Enabled';
    } else {
       this.btn = 'Activate';
       this.stt = 'Disabled';
    }
  }

}
