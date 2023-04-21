import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../../services/query-provider.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  constructor(
    private queryService: QueryService
  ){}

  ngOnInit(): void {
    this.print();
  }

  public print() {
    const upcoming = this.queryService.requestUpcoming();
    console.log(upcoming)
  }
}
