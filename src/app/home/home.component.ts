import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  providers: [],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  imageArray = [
    { id: 1, img: 'assets/images/1.jpg', width: '1939px', height: '1374px' },
    { id: 2, img: 'assets/images/2.jpg', width: '5184px', height: '3456px' },
    { id: 3, img: 'assets/images/3.jpg', width: '4512px', height: '2528px' },
    { id: 4, img: 'assets/images/4.jpg', width: '5315px', height: '3555px' },
    {
      id: 10,
      img: 'https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?cs=srgb&dl=pexels-fl%C3%A1vio-augusto-1832959.jpg&fm=jpg',
      width: '5315px',
      height: '3555px',
    },
    {
      id: 11,
      img: 'https://images.pexels.com/photos/4738081/pexels-photo-4738081.jpeg?auto=compress&cs=tinysrgb&w=600',
      width: '5315px',
      height: '3555px',
    },
    {
      id: 5,
      img: 'assets/images/5.jpg',
      width: '5315px',
      height: '3555px',
    },
    {
      id: 6,
      img: 'https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: '4368px',
      height: '2912px',
    },
    { id: 6, img: 'assets/images/6.jpg', width: '4368px', height: '2912px' },
    { id: 7, img: 'assets/images/7.jpg', width: '5918px', height: '4156px' },
    {
      id: 12,
      img: 'https://images.pexels.com/photos/1002841/pexels-photo-1002841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: '5918px',
      height: '4156px',
    },
    { id: 8, img: 'assets/images/8.jpg', width: '4896px', height: '3264px' },
    { id: 9, img: 'assets/images/9.jpg', width: '5132px', height: '4000px' },
    {
      id: 13,
      img: 'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: '5132px',
      height: '4000px',
    },
    {
      id: 14,
      img: 'https://images.pexels.com/photos/1054139/pexels-photo-1054139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: '5132px',
      height: '4000px',
    },
    {
      id: 15,
      img: 'https://images.pexels.com/photos/6369229/pexels-photo-6369229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: '5132px',
      height: '4000px',
    },
  ];
}
