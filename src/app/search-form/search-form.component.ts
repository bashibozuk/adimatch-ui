import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ALL_SPORTS, Sport} from '../model/user.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output()
  public search = new EventEmitter();

  @Output()
  public filterChanged = new EventEmitter();

  public allSports = ALL_SPORTS;

  @Input()
  public selectedSports: Sport[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.allSports);
  }

  toggleSport($event: MouseEvent, sport: Sport): void {
    $event.stopImmediatePropagation();
    const key: number = this.selectedSports.indexOf(sport);
    if (key === -1) {
      this.selectedSports.push(sport);
    } else {
      this.selectedSports.splice(key, 1);
    }

    this.selectedSports = this.selectedSports.slice();
    this.filterChanged.emit(this.selectedSports);
  }

  onSearch() {
    this.search.emit();
  }
}
