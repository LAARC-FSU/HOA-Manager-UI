import {Component} from '@angular/core';

class History {
  Date:any;
  Amount:any;
  For:any;
  Method:any;
}
@Component({
  selector: 'transaction-history',
  styleUrls: ['./transaction-history.component.scss'],
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent{
  results: History[] = [{Date: '11/2/22', Amount: '$100.00', For: 'HOA Dues', Method: 'Check'}];
}

