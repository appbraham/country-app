import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [
    `.spinner-container{
      align-items: center;
      background-color: black;
      border-radius: 25px;
      bottom: 15px;
      color: white;
      display:flex;
      padding: 5px 20px;
      position: fixed;
      right: 15px;
      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5)
    }
    `
  ]
})
export class LoadingSpinnerComponent {

}
