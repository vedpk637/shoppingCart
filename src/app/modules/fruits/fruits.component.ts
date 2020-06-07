import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
 
  fruits=[];
  isAdded:boolean;
  item=0;
  constructor(private _utilityServices:UtilityserviceService) { }
 

  ngOnInit() {
    this._utilityServices.fruitsData().subscribe(res=>{                         // subscribing service data
      this.fruits = Object.values(res);             
      console.log(res);
    })
  }
  //select product function
  onSelectedProduct(obj){
    obj.isAdded = true;
    obj.item = 1;
    this._utilityServices.setSelectedItems(obj);
  }

  //Add product function
  onAddProduct(obj){
    console.log(obj)
    obj.item = obj.item + 1;
    this._utilityServices.setSelectedItems(obj);
  }

  //Remove product function
  onRemoveProduct(obj,i){
    this._utilityServices.removeSelectedItems(obj,i)
    if(obj.item<2){
      obj.isAdded = false;
    }else{
      obj.item = obj.item - 1;
    }
    this._utilityServices.dataChange.next("data Remove");
  }

}