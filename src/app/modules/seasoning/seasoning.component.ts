import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-seasoning',
  templateUrl: './seasoning.component.html',
  styleUrls: ['./seasoning.component.scss']
})
export class SeasoningComponent implements OnInit {
  seasoning=[];
  isAdded:boolean;
  item=0;

  constructor(private _utilityServices:UtilityserviceService) { }

  ngOnInit() {

    this._utilityServices.seasioningData().subscribe(res=>{
      this.seasoning = Object.values(res); 
    })
  }
  
  // selected product method
  onSelectedProduct(obj){
    obj.isAdded = true;
    obj.item = 1;
    this._utilityServices.setSelectedItems(obj);
  }

  // Add product method
  onAddProduct(obj){
    console.log(obj)
    obj.item = obj.item + 1;
    this._utilityServices.setSelectedItems(obj);
  }

  // Remove product method
  onRemoveProduct(obj,i){
    this._utilityServices.removeSelectedItems(obj,i)
    if(obj.item<2){
      obj.isAdded = false;
      // obj.item = 0;
    }else{
      obj.item = obj.item - 1;
    }
    this._utilityServices.dataChange.next("data Remove");
  }

}