import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Output()
  onValue:EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder!: string;

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( value => {
      this.onDebounce.emit( value )
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();

  }

  sendValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress( searchTerm: string) {
    this.debouncer.next( searchTerm );

  }

}
