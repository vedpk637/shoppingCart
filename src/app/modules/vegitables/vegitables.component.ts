import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-vegitables',
  templateUrl: './vegitables.component.html',
  styleUrls: ['./vegitables.component.scss']
})
export class VegitablesComponent implements OnInit {

  vegitables=[];
  isAdded:boolean;
  item=0;
  tempArray=[];
  constructor(private _utilityServices:UtilityserviceService) { }

  ngOnInit() {
    this.tempArray = JSON.parse(localStorage.getItem('header'));

    this._utilityServices.vegitablesData().subscribe(res=>{
      this.vegitables = Object.values(res); 
      console.log(this.vegitables);

      for (let i = 0; i < this.vegitables.length; i++) {
        this.vegitables[i].item =0;
        this.tempArray.forEach(element => {
          if(this.vegitables[i].id === element.id){
             this.vegitables[i].item ++;
             this.vegitables[i].isAdded = true;
          }else{
            this.item=1;
          }
          
        });
        
      }

      // console.log(resData)
    })
    // console.log()
  }

  onSelectedProduct(obj){
    obj.isAdded = true;
    obj.item = 1;
    this._utilityServices.setSelectedItems(obj);
  }

  onAddProduct(obj){
    console.log(obj)
    obj.item = obj.item + 1;
    this._utilityServices.setSelectedItems(obj);
  }

  onRemoveProduct(obj,i){
    this._utilityServices.removeSelectedItems(obj,i)
    if(obj.item<2){
      obj.isAdded = false;
      // this.count = 0;
    }else{
      obj.item = obj.item - 1;
    }
    this._utilityServices.dataChange.next("data Remove");
  }

}
