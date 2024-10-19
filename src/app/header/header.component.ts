import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class HeaderComponent {

  public id!: any;
  public productList!: any;
  public category!: any;
  cartItems!: number;

  constructor(public route: ActivatedRoute, public service: HttpService) {
    
  }
}
