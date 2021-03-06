import {Component, OnInit} from '@angular/core';
import {LogService} from '../../services/log-service/log.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-table-view',
  styleUrls: ['./table-view.component.css'],
  templateUrl: './table-view.component.html',
})
export class TableViewComponent implements OnInit {
  private displayedColumns = [];

  constructor(private logService: LogService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.queryParams['id'];
    const source = this.activateRoute.snapshot.queryParams['source'];
    const dateStart = this.activateRoute.snapshot.queryParams['start'];
    const dateEnd = this.activateRoute.snapshot.queryParams['end'];
    const page = this.activateRoute.snapshot.queryParams['page'];

    if (id) {
      this.logService.markedLogId = id;
    }

    if (dateStart) {
      this.logService.dateStart = Number(dateStart);
    }

    if (dateEnd) {
      this.logService.dateEnd = Number(dateEnd);
    }

    if (source) {
      this.logService.currentSource = source;
    }

    if (page) {
      this.logService.currentPage = page;
    }

    this.logService.getLogs();
  }

  onChange() {
    this.logService.getLogs();
  }
}
