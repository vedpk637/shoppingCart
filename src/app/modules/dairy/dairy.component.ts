import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.scss']
})
export class DairyComponent implements OnInit {
  dairies=[];
  isAdded:boolean;
  item=0;
  constructor(private _utilityServices:UtilityserviceService) { }

  ngOnInit() {

    this._utilityServices.dairyData().subscribe(res=>{                    // subscribe srvice function here 
      this.dairies = Object.values(res); 
      console.log(this.dairies);
    });
  }

   //select product function
  onSelectedProduct(obj){
    this._utilityServices.setSelectedItems(obj);
    obj.isAdded = true;
    obj.item = 1;
  }

   //Add product function
  onAddProduct(obj){
    this._utilityServices.setSelectedItems(obj);
    console.log(obj)
    obj.item = obj.item + 1;

  }

   //Remove product function
  onRemoveProduct(obj,i){
    this._utilityServices.removeSelectedItems(obj,i)
    if(obj.item<2){
      obj.isAdded = false;
      obj.item = obj.item - 1;
    }else{
      obj.item = obj.item - 1;
    }
    this._utilityServices.dataChange.next("data Remove");
  }

}
