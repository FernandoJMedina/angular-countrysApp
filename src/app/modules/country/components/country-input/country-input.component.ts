import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject();

  public searchTerm: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.searchTerm);
  }

  onSearch() {
    this.debouncer.next(this.searchTerm);
  }
}
