import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-declarative-programming',
  imports: [CommonModule],
  templateUrl: './declarative-programming.component.html',
  styleUrl: './declarative-programming.component.css',
})
export class DeclarativeProgrammingComponent {
  isShow = true;

  toogleShowAndHide() {
    this.isShow = !this.isShow;
  }
}
