import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';
import { element } from 'protractor';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  id=['bread','dairy','fruits','seasioning','vegitables'];
  recievedData=[];
  datas=[];
  tempArray=[];
  item=0;
  filteredItems=[];
  constructor(private _utilityService:UtilityserviceService) {

   }

  ngOnInit() {
     this.tempArray = JSON.parse(localStorage.getItem('header'));

     this.id.forEach(element => {this._utilityService.allData(element).subscribe(res=>{
      this.recievedData=Object.values(res);
      this.filteredItems = this.filteredItems.concat( this.recievedData);

      // reduce same product
      this.filteredItems = this.filteredItems.reduce((acc, current) => {
        const x = acc.find(item => item.product === current.product);            
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      console.log(this.filteredItems);
      this.datas = this.filteredItems;
      
      // counting items
      for (let i = 0; i < this.datas.length; i++) {
        this.datas[i].item =0;
        this.tempArray.forEach(element => {
          if(this.datas[i].id === element.id){
             this.datas[i].item ++;
             this.datas[i].isAdded = true;
          }else{
            this.item=1;
          }
          
        });
        
      }
    })
    
    })


     
      

  }


  


  addToCart(obj){
    obj.isAdded = true;
    obj.item=1;
    this._utilityService.setSelectedItems(obj);
    this._utilityService.dataChange.next("data Add");
  }

  onAddProduct(obj){
    this._utilityService.setSelectedItems(obj);
    
    obj.item = obj.item + 1;
    this._utilityService.dataChange.next("data Add");

  }

  onRemoveProduct(obj,i){
    this._utilityService.removeSelectedItems(obj,i)

    console.log(obj.item)
    if(obj.item<2){
      obj.isAdded = false;
      obj.item = obj.item - 1;
    }else{
      obj.item = obj.item - 1;
      
    }
    this._utilityService.dataChange.next("data Remove");
     
  }

}
