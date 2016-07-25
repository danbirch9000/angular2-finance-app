import { FinanceService } from './app/finance.service';
export declare class App {
    private _financeService;
    names: string;
    constructor(_financeService: FinanceService);
    getUserInfo(): void;
}
