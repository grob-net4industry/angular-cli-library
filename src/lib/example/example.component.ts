import { Component } from '@angular/core';

@Component({
  selector: 'gn4i-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  name: string = 'example';

  constructor() { }

  showName() {
    console.log('My name is', this.name);
  }
}
