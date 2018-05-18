import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {
  smsCode;
  correctCode = false;

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router,
    public snackBar: MatSnackBar
  ) { }

  onCloseConfirm() {
    this.dialogRef.close('Confirm');
  }
  onCloseCancle() {
    this.dialogRef.close('Cancle');
  }

  ngOnInit() {
  }

  checkSMSCode() {
    if (this.smsCode === '123') {
      this.correctCode = false;
      this.route.navigate(['./home-page']);
      this.onCloseConfirm();
      this.openSnackBar();
    }
  }

  checkCode() {
    if (this.smsCode === '123') {
      this.correctCode = false;
    } else {
      this.correctCode = true;
    }
  }

  openSnackBar() {
    this.snackBar.open(
      'Payment Sucessfull !!! Mail will send to you :-)',
      'Ok',
      {
        duration: 5000,
      }
    );
  }

}
