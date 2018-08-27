import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Refund } from '../models/refund.model'; 

@Injectable()
export class RefundService {
    //API_URL = 'http://localhost:4200';
    API_URL = 'https://test-webapp-refundtracking-api.azurewebsites.net';
    constructor(private httpClient: HttpClient) { }

    getRefunds() {
        return this.httpClient.get(`${this.API_URL}/api/values`);
    }

    addRefund(refund: Refund){
        return this.httpClient.post(`${this.API_URL}/api/values`, refund);
    }

    updateRefund(refund: Refund){
        return this.httpClient.put(`${this.API_URL}/api/values/` + refund.refundTrackingId, refund);
    }

    deleteRefund(refund: Refund){
        return this.httpClient.delete(`${this.API_URL}/api/values/` + refund.refundTrackingId);
    }
}