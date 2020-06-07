import { Component, OnInit, DoCheck } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
   items=[]
   count:number=0;
  constructor(private _utilityServices:UtilityserviceService, private route:Router) { }

  ngOnInit() {
   this.items= this._utilityServices.selectedItems;
    this.count = this.items.length;
    this._utilityServices.dataChange.subscribe(res=>{
    this.items= this._utilityServices.selectedItems;
    this.count = this.items.length;
    console.log(this.count,"inner")
    });
    this.count = this.items.length;
    // 
  }

  ngDoCheck(){
    // this.items= this._utilityServices.selectedItems;
    // this.count = this.items.length;
  }
  
  onClick(){
    
    console.log(this.items,"parent");
    this.route.navigate(['/purchase']);
  }

  goToHome(){
    this.route.navigateByUrl("")
  }
}
