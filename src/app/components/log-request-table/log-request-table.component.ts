import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LogRequest} from "../../model/log-request.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {LogRequestService} from "../../services/log-request.service";
import {Page} from "../../model/page.model";

@Component({
  selector: 'app-log-request-table',
  templateUrl: './log-request-table.component.html',
  styleUrls: ['./log-request-table.component.css']
})
export class LogRequestTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'url', 'username', 'date'];
  dataSource: MatTableDataSource<LogRequest> = new MatTableDataSource<LogRequest>([]);
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  pageableLogRequest: Page<LogRequest>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private logRequestService: LogRequestService) {
  }


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.logRequestService.getLogs(0, 10).subscribe({
        next: value => {
          this.pageableLogRequest = value;
          this.dataSource.data = value.content
        }
      }
    )
  }

  onPageChange() {
    this.loading.emit(true)
    this.logRequestService.getLogs(this.paginator.pageIndex, this.paginator.pageSize).subscribe({
        next: value => this.dataSource.data = value.content,
        complete: () => this.loading.emit(false)
      }
    )
  }
}
