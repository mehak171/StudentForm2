import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() public name = 'Mehak';
  public today: Date;
  constructor() {
    this.today = new Date();
  }
}
