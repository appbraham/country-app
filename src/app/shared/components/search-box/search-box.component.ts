import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  onValue:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder!: string;

  sendValue(value: string): void {

    this.onValue.emit(value);

  }

}
