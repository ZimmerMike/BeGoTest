import { Component, OnInit } from '@angular/core';
import { Upcoming } from '../../../interfaces/interfaces';
import { QueryService } from '../../../services/query-provider.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  public upcomingData: Array<Upcoming>;
  constructor(
    private queryService: QueryService
  ){}

  async ngOnInit(): Promise<void> {
    this.upcomingData = await this.getUpcomingData();
    console.log(new Date(1654904100000))
  }

  public async getUpcomingData(): Promise<Array<Upcoming>> {
    return await this.queryService.requestUpcoming();
  }
}
