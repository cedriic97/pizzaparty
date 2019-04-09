import { Component, OnInit } from '@angular/core';
import { WelcomeAlertComponent } from '../welcome-alert/welcome-alert.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [
    { name: 'HEADER.MENU_ITEM.HOME', icon: 'home', click: 'home' },
    { name: 'HEADER.MENU_ITEM.PATCHNOTES', icon: 'person', click: 'notes' },
    { name: 'HEADER.MENU_ITEM.FEEDBACK', icon: 'accessibility', click: 'feedback' }
  ];

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {

  }
  showWelcomeDialog() {
    const dialogRef = this.dialog.open(WelcomeAlertComponent, { disableClose: false, panelClass: 'panel-welcome' })
  }

  redirectTo(click: string) {
    switch (click) {
      case 'home':
      this.router.navigate(['/idea-one'])
        break;
      case 'notes':
        this.showWelcomeDialog();
        break;
      case 'feedback':
        this.router.navigate(['/feedback'])
        break;

      default:
        break;
    }
  }

}
