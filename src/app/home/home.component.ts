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
    { id: 1, img: '../../assets/images/IMG_4741-Recovered.webp' },

    { id: 21, img: '../../assets/images/3/IMG_5913.webp' },
    { id: 22, img: '../../assets/images/3/IMG_5919.webp' },
    { id: 23, img: '../../assets/images/3/IMG_5926.webp' },

    { id: 24, img: '../../assets/images/3/IMG_5930.webp' },
    { id: 25, img: '../../assets/images/3/IMG_5934==.webp' },
    { id: 26, img: '../../assets/images/3/IMG_5937--.webp' },
    { id: 27, img: '../../assets/images/3/IMG_5959.webp' },
    { id: 28, img: '../../assets/images/4/IMG_3610.webp' },
    { id: 29, img: '../../assets/images/4/IMG_3611.webp' },
    { id: 7, img: '../../assets/images/1/IMG_6004.webp' },
    { id: 8, img: '../../assets/images/1/IMG_6009.webp' },
    { id: 9, img: '../../assets/images/1/IMG_6010.webp' },
    { id: 10, img: '../../assets/images/1/IMG_6015.webp' },
    { id: 11, img: '../../assets/images/1/IMG_6017.webp' },
    { id: 12, img: '../../assets/images/1/IMG_6018.webp' },
    { id: 2, img: '../../assets/images/1/IMG_5980-Recovered.webp' },
    { id: 3, img: '../../assets/images/1/IMG_5984.webp' },
    { id: 4, img: '../../assets/images/1/IMG_5986.webp' },
    { id: 5, img: '../../assets/images/1/IMG_5998.webp' },
    { id: 6, img: '../../assets/images/1/IMG_6001.webp' },
    { id: 30, img: '../../assets/images/4/IMG_3616.webp' },
    { id: 31, img: '../../assets/images/4/IMG_3639.webp' },
    { id: 32, img: '../../assets/images/4/IMG_3648.webp' },
    { id: 33, img: '../../assets/images/4/IMG_3650.webp' },
    { id: 34, img: '../../assets/images/4/IMG_3663.webp' },
    { id: 35, img: '../../assets/images/4/IMG_3665.webp' },
    { id: 36, img: '../../assets/images/5/IMG_2630.webp' },
    { id: 37, img: '../../assets/images/5/IMG_2649-Recovered.webp' },
    { id: 38, img: '../../assets/images/5/IMG_2652-Recovered.webp' },
    { id: 39, img: '../../assets/images/5/IMG_5139.webp' },
    { id: 40, img: '../../assets/images/5/IMG_5164.webp' },
    { id: 41, img: '../../assets/images/5/IMG_5189.webp' },
  ];

  zahraCar = [
    { id: 17, img: '../../assets/images/2/IMG_6003.webp' },
    { id: 18, img: '../../assets/images/2/IMG_6005.webp' },
    { id: 19, img: '../../assets/images/2/IMG_6008.webp' },
    { id: 20, img: '../../assets/images/2/IMG_6014.webp' },
    { id: 13, img: '../../assets/images/2/IMG_5995.webp' },
    { id: 14, img: '../../assets/images/2/IMG_5997.webp' },
    { id: 15, img: '../../assets/images/2/IMG_5999.webp' },
    { id: 16, img: '../../assets/images/2/IMG_6000.webp' },
  ];

  openDialog(item: ImageModel) {
    this.openDialogService.open(DialogImageComponent, {
      data: {
        img: item.img,
      },
    });
  }
}
