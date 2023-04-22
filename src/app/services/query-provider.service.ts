import { Injectable } from '@angular/core';
import { Upcoming, UpcomingResponse } from '../interfaces/interfaces';

@Injectable()
export class QueryService {
    constructor(
    ) { }

    /**
     * @description Executes request to get upcoming data from URL provided
     * @returns {Array<Upcoming>} - Upcoming data
     */
    public async requestUpcoming(): Promise<Array<Upcoming>> {
        return fetch('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming')
            .then(response => response.json())
            .then((data: UpcomingResponse) => { return data.result });
    }

    public async requestOrders() {

    }
}