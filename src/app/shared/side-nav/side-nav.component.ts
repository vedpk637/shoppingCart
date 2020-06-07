import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private _utilityServices:UtilityserviceService) { }

  ngOnInit() {
  }

  onAllClick(){

  }

  onBreadClick(data){
    this._utilityServices.clickedKey = data.target.innerText;
    console.log((this._utilityServices.clickedKey), "nav")
  }

  onDairyClick(data){
    this._utilityServices.clickedKey = data;
  }

  onFruitsClick(data){
    this._utilityServices.clickedKey = data;
  }

  onSeasoningClick(data){
    this._utilityServices.clickedKey = data;
  }

  onVegitablesClick(data){
    this._utilityServices.clickedKey = data;
  }

}
