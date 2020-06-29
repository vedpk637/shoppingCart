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
  tempArray=[]
  constructor(private _utilityServices:UtilityserviceService) { }
 

  ngOnInit() {
    this.tempArray = JSON.parse(localStorage.getItem('header'));

    this._utilityServices.fruitsData().subscribe(res=>{                         // subscribing service data
      this.fruits = Object.values(res);             
      console.log(res);

      for (let i = 0; i < this.fruits.length; i++) {
        this.fruits[i].item =0;
        this.tempArray.forEach(element => {
          if(this.fruits[i].id === element.id){
             this.fruits[i].item ++;
             this.fruits[i].isAdded = true;
          }else{
            this.item=1;
          }
          
        });
        
      }

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