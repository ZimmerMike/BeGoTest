import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryService {
    constructor(
        private http: HttpClient
    ) { }

    public requestUpcoming() {
        return this.http.get('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming');
    }

    public requestOrders() {
        return this.http.get<any>('https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders');
    }
}