import { Component, OnInit } from '@angular/core';
import { RefundService } from './refund.service';
import { Refund } from '../models/refund.model';

@Component({
  selector: 'app-get-refunds',
  templateUrl: './get-refunds.component.html',
  styleUrls: ['./get-refunds.component.css']
})
export class GetRefundsComponent implements OnInit {
  public getRefunds() {
    this._refundService.getRefunds().subscribe((data: Refund[]) => {
      this.refunds = data;
    });
  }

  displayDialog: boolean;
  refund: Refund = {refundTrackingId:0,refundType:"",accountId:0,accountName:"",chargeDateFrom:"",chargeDateTo:"",branch:"",amount:0,refundReason:"",comments:"",submittedBy:"",submittedDate:"",deletedStatus:false,status:"",canceledBy:"",canceledDate:"",transmittedDate:"",transactionDate:"",acceptedBy:"",updatedBy:""};
  selectedRefund: Refund;
  newRefund: boolean;
  refunds: Refund[];
  cols: any[];
  constructor(private _refundService: RefundService) { }

  ngOnInit() {
    this.getRefunds();
    this.cols = [
      { field: 'branch', header: 'Branch' },
      { field: 'refundType', header: 'Refund Type' },
      { field: 'refundReason', header: 'Refund Reason' },
      { field: 'amount', header: 'Amount' }
    ];
  }

  showDialogToAdd() {
      this.newRefund = true;
      this.refund = {refundTrackingId:0,refundType:"",accountId:0,accountName:"",chargeDateFrom:"",chargeDateTo:"",branch:"",amount:0,refundReason:"",comments:"",submittedBy:"",submittedDate:"",deletedStatus:false,status:"",canceledBy:"",canceledDate:"",transmittedDate:"",transactionDate:"",acceptedBy:"",updatedBy:""};
      this.displayDialog = true;
      console.log(this.refund);
  }

  save() {
      let refunds = [...this.refunds];
      if (this.newRefund)
      {
        refunds.push(this.refund);
        this._refundService.addRefund(this.refund).subscribe(refund => {
          refund
        });
      }  
      else
      {
        refunds[this.refunds.indexOf(this.selectedRefund)] = this.refund;
        this._refundService.updateRefund(this.refund).subscribe(refund => {
          refund
        });
      }
      
      this.refunds = refunds;
      this.refund = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.refunds.indexOf(this.selectedRefund);
      this.refunds = this.refunds.filter((val, i) => i != index);
      this._refundService.deleteRefund(this.refund).subscribe(refund => {
        refund
      });
      this.refund = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newRefund = false;
      this.refund = this.cloneRefund(event.data);
      this.displayDialog = true;
  }

  cloneRefund(c: Refund): Refund {
      let refund: Refund = {refundTrackingId:0,refundType:"",accountId:0,accountName:"",chargeDateFrom:"",chargeDateTo:"",branch:"",amount:0,refundReason:"",comments:"",submittedBy:"",submittedDate:"",deletedStatus:false,status:"",canceledBy:"",canceledDate:"",transmittedDate:"",transactionDate:"",acceptedBy:"",updatedBy:""};
      for (let prop in c) {
        refund[prop] = c[prop];
      }
      return refund;
  }
}
