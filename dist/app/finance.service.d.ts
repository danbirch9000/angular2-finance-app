import { Http } from 'angular2/http';
import 'rxjs/Rx';
export declare class FinanceService {
    endpoint_url: String;
    constructor(http: Http);
    getUserInfo(region: String): any;
}
