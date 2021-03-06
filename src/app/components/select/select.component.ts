import {Component, EventEmitter, OnInit} from '@angular/core';
import {LogService} from '../../services/log-service/log.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private items: string[];
  private selected = new EventEmitter<string>();
  private item: string;

  constructor(private logService: LogService) {
    logService.getSources().subscribe(items => {
      this.items = items;
      this.items.push('not specified');
      this.item = this.logService.currentSource;
    });
  }

  ngOnInit() {
  }

  onChange() {
    this.selected.emit(this.item);
    this.logService.currentSource = this.item;
    this.logService.getLogs();
  }
}
