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
  tempArray=[];

  constructor(private _utilityServices:UtilityserviceService) { }

  ngOnInit() {
    this.tempArray = JSON.parse(localStorage.getItem('header'));

    this._utilityServices.seasioningData().subscribe(res=>{
      this.seasoning = Object.values(res); 

      for (let i = 0; i < this.seasoning.length; i++) {
        this.seasoning[i].item =0;
        this.tempArray.forEach(element => {
          if(this.seasoning[i].id === element.id){
             this.seasoning[i].item ++;
             this.seasoning[i].isAdded = true;
          }else{
            this.item=1;
          }
          
        });
        
      }

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