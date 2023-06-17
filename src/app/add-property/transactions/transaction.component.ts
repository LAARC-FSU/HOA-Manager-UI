import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';

class Transaction {
  id:any;
  discr:any;
  date:any;
  cost:any;
  type:any;
}

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [{id:'1', discr:'interdum velit euismod in pellentesque', date:'2/5/2002',cost:'$250,000',type:'Sale'}];
  constructor() {}
  ngOnInit(): void {}
}
