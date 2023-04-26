import { Component, OnInit } from '@angular/core';
import { Upcoming } from '../../../interfaces/interfaces';
import { QueryService } from '../../../services/query-provider.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss', '../../../app.component.scss']
})
export class UpcomingComponent implements OnInit {
  public currentDate: Date;
  public upcomingData: Array<Upcoming>;
  constructor(
    private queryService: QueryService
  ){}

  async ngOnInit(): Promise<void> {
    this.upcomingData = await this.getUpcomingData();
    this.currentDate = this.getDateFormat();
    console.log(this.currentDate)
    console.log(this.getDateFormat(1654904100000))
  }

  public async getUpcomingData(): Promise<Array<Upcoming>> {
    return await this.queryService.requestUpcoming();
  }

  public getDateFormat(dateNumber?: number): Date {
    return dateNumber ? new Date(dateNumber) : new Date();
  }
}
