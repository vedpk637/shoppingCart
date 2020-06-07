import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  id=['bread','dairy','fruits','seasioning','vegitables'];
  recievedData=[];
  datas=[];
  constructor(private _utilityService:UtilityserviceService) {

   }

  ngOnInit() {
    this.id.forEach(element => {
      // console.log(element);
      this._utilityService.allData(element).subscribe(res=>{
        this.recievedData=Object.values(res);
        console.log(this.recievedData);
        this.datas = this.datas.concat(this.recievedData);



        // hash method to extract same brand of data

        let userHashMap = {};
        this.datas = this.datas.filter((item,_)=>{
          let alreadyExists = userHashMap.hasOwnProperty(item.product);
          return alreadyExists? false : userHashMap[item.product]=1;
          
        })
        
      });
      // console.log()
    });

  }


  addToCart(obj){
    obj.isAdded = true;
    obj.item = 1;
    this._utilityService.setSelectedItems(obj);

  }

  onAddProduct(obj){
    console.log(obj)
    this._utilityService.setSelectedItems(obj);
    
    obj.item = obj.item + 1;

  }

  onRemoveProduct(obj,i){
    this._utilityService.removeSelectedItems(obj,i)
    // this.storedItemInCart.forEach(element => {
    //  console.log(element) ;
    // });
    console.log(obj.item)
    if(obj.item<2){
      obj.isAdded = false;
      obj.item = obj.item - 1;
    }else{
      obj.item = obj.item - 1;
      // this._utilityServices.selectedItems.splice(obj,i)
      
    }
    this._utilityService.dataChange.next("data Remove");
     
  }

}
