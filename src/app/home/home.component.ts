import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogImageComponent } from '../shared/components/dialog-image/dialog-image.component';

export interface ImageModel {
  id: number;
  img: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DialogImageComponent],
  providers: [],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public openDialogService = inject(MatDialog);

  imageArray = [
    { id: 1, img: '../../assets/images/IMG_4741-Recovered-22.jpg' },
    { id: 2, img: '../../assets/images/1/IMG_5980-Recovered.jpg' },
    { id: 3, img: '../../assets/images/1/IMG_5984.jpg' },
    { id: 4, img: '../../assets/images/1/IMG_5986.jpg' },
    { id: 5, img: '../../assets/images/1/IMG_5998.jpg' },
    { id: 6, img: '../../assets/images/1/IMG_6001.jpg' },
    { id: 7, img: '../../assets/images/1/IMG_6004.jpg' },
    { id: 8, img: '../../assets/images/1/IMG_6009.jpg' },
    { id: 9, img: '../../assets/images/1/IMG_6010.jpg' },
    { id: 10, img: '../../assets/images/1/IMG_6015.jpg' },
    { id: 11, img: '../../assets/images/1/IMG_6017.jpg' },
    { id: 12, img: '../../assets/images/1/IMG_6018.jpg' },
    { id: 13, img: '../../assets/images/2/IMG_5995.jpg' },
    { id: 14, img: '../../assets/images/2/IMG_5997.jpg' },
    { id: 15, img: '../../assets/images/2/IMG_5999.jpg' },
    { id: 16, img: '../../assets/images/2/IMG_6000.jpg' },
    { id: 17, img: '../../assets/images/2/IMG_6003.jpg' },
    { id: 18, img: '../../assets/images/2/IMG_6005.jpg' },
    { id: 19, img: '../../assets/images/2/IMG_6008.jpg' },
    { id: 20, img: '../../assets/images/2/IMG_6014.jpg' },
    { id: 21, img: '../../assets/images/3/IMG_5913.jpg' },
    { id: 22, img: '../../assets/images/3/IMG_5919.jpg' },
    { id: 23, img: '../../assets/images/3/IMG_5926.jpg' },
    { id: 24, img: '../../assets/images/3/IMG_5930.jpg' },
    { id: 25, img: '../../assets/images/3/IMG_5934==.jpg' },
    { id: 26, img: '../../assets/images/3/IMG_5937--.jpg' },
    { id: 27, img: '../../assets/images/3/IMG_5959.jpg' },
    { id: 28, img: '../../assets/images/4/IMG_3610.JPG' },
    { id: 29, img: '../../assets/images/4/IMG_3611.JPG' },
    { id: 30, img: '../../assets/images/4/IMG_3616.JPG' },
    { id: 31, img: '../../assets/images/4/IMG_3639.JPG' },
    { id: 32, img: '../../assets/images/4/IMG_3648.JPG' },
    { id: 33, img: '../../assets/images/4/IMG_3650.JPG' },
    { id: 34, img: '../../assets/images/4/IMG_3663.JPG' },
    { id: 35, img: '../../assets/images/4/IMG_3665.jpg' },
    { id: 36, img: '../../assets/images/5/IMG_2630.jpg' },
    { id: 37, img: '../../assets/images/5/IMG_2649-Recovered.jpg' },
    { id: 38, img: '../../assets/images/5/IMG_2652-Recovered.jpg' },
    { id: 39, img: '../../assets/images/5/IMG_5139.jpg' },
    { id: 40, img: '../../assets/images/5/IMG_5164.jpg' },
    { id: 41, img: '../../assets/images/5/IMG_5189.jpg' },
  ];

  openDialog(item: ImageModel) {
    this.openDialogService.open(DialogImageComponent, {
      data: {
        img: item.img,
      },
    });
  }
}
