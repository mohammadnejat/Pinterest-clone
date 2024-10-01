import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private matDialog: MatDialog) {}

  aboutme() {
    this.matDialog.open(AboutMeComponent, {
      width: '80%',
      data: {},
    });
  }
}
