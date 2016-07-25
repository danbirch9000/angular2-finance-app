import { Injectable } from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx'


@Injectable()
export class FinanceService {

    endpoint_url:String = "http://localhost:8080/api/";
    
    constructor(http: Http){
        this.http = http;
    }
    
    getUserInfo (region:String){
    let headers = new Headers();
    headers.append('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzdlOWMzNGUwMGQ1NDAzMzNhYzEwOTgiLCJlbWFpbCI6ImRhbmllbG5iaXJjaDEwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDRKYkZ5TDVSSkhCYkNGWE1UWDNmak9uSjQ4VUdwODh1aEZSdkdEeWguVGZwd1RCUXRiREF5IiwiX192IjowfQ.3SM3VPygdbOWjdvkstYfFGHGs5wjig2dzJfQjvVwufA');
        //
       return this.http.get(
           this.endpoint_url + region, {headers}
           ).map(
               res => res.json()
               );

    }




}