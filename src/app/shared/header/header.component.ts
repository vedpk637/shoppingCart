import { Component, OnInit} from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
   items=[]
   count:number=0;
  constructor(private _utilityServices:UtilityserviceService, private route:Router) {
    
   }

  ngOnInit() {
    
    this.items = JSON.parse(localStorage.getItem('header'));
    console.log(this.items,"header")
    setInterval(()=>{
      this._utilityServices.dataChange.subscribe(res=>{
        localStorage.setItem('header',JSON.stringify(this._utilityServices.getSelectedItems()));
        this.items = JSON.parse(localStorage.getItem('header'));
        
        this.count = this.items.length;
        // console.log(this.count,"inner")
        });
    },200)

    this.count = this.items.length;
    
  }

  
  onClick(){
    console.log(this.items,"parent");
    this.route.navigate(['/purchase']);
  }

  goToHome(){
    this.route.navigateByUrl("")
  }

}
