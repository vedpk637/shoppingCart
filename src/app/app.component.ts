import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';
import { UtilityserviceService } from './utilityservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShoppingCart';

  constructor(private _utilityservice:UtilityserviceService){}

  ngOnInit(){
   
  }

  
}
