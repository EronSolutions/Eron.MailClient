import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deleteItems: boolean;
  constructor(public snackBar: MatSnackBar) {}
  panelOpenState = false;
  ngOnInit() {}

  onMarkAsRead() {
    this.deleteItems = true;
    this.snackBar.open('ایمیل ها حذف شدند', 'لغو', {duration: 5000});
    const snackBarRef = this.snackBar._openedSnackBarRef;
    this.snackBar._openedSnackBarRef.onAction().subscribe(() => {
      this.deleteItems = false;
      this.snackBar.open('عملیات لغو شد', '', {
        duration: 3000
      });
    });

    snackBarRef.afterDismissed().subscribe(() => {
      if (this.deleteItems === true) {
        this.snackBar.open(this.deleteItems.toString());
      } else {
        this.snackBar.open(this.deleteItems.toString());
      }
    });
  }
}
