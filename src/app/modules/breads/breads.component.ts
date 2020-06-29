import { Component, OnInit} from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.scss']
})
export class BreadsComponent implements OnInit{
  breads=[];
  isAdded:boolean;
  item=1;
  tempArray=[];
  storedItemInCart=[];
  constructor(private _utilityServices:UtilityserviceService) { }
  
  ngOnInit() {
    this.tempArray = JSON.parse(localStorage.getItem('header'));          // received data from local storage
    this._utilityServices.breadData().subscribe(res=>{                    // subscribe service data
      this.breads = Object.values(res);                                  // extracting value from object having key pair
      console.log(this.breads,"this.storedItemInCart");

      for (let i = 0; i < this.breads.length; i++) {
        this.breads[i].item =0;
        this.tempArray.forEach(element => {
          if(this.breads[i].id === element.id){
             this.breads[i].item ++;
             this.breads[i].isAdded = true;
          }else{
            this.item=1;
          }
          
        });
        
      }
      // this.breads = this.tempArray;
  
    })


  }

   //Add To Cart product function
  addToCart(obj){
    obj.isAdded = true;
    obj.item = 1;
    this._utilityServices.setSelectedItems(obj);
    this._utilityServices.dataChange.next("data Add");

  }

   //Add product function
  onAddProduct(obj){
    console.log(obj)
    this._utilityServices.setSelectedItems(obj);
    
    obj.item = obj.item + 1;
    this._utilityServices.dataChange.next("data Add");
  }

   //Remove product function
  onRemoveProduct(obj,i){
    this._utilityServices.removeSelectedItems(obj,i)
    if(obj.item<2){
      obj.isAdded = false;
      obj.item = obj.item - 1;
    }else{
      obj.item = obj.item - 1; 
    };

    this._utilityServices.dataChange.next("data Remove");
     
  }

}
