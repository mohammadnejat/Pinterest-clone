import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ImageModel } from '../../../home/home.component';
@Component({
  selector: 'app-dialog-image',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogImageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageModel) {}

  log() {
    console.log(this.data);
  }
}
