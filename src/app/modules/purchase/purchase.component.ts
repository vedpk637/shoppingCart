import { Component, OnInit } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  recievedItems=[];
  filteredItems=[];
  item:number=1;
  itemCount=[];
  totalPrice:number=0;
  constructor(private _utilityServices:UtilityserviceService, private router:Router) { }

  ngOnInit() {

    this.recievedItems =  JSON.parse(localStorage.getItem('header'));                  // assigning data from service to received items
    // console.log(localStorage.getItem('header'),"purchase")

     this.recievedItems.sort((a , b) =>{return a.id - b.id ;})   //sorting of array
    //  console.log(this.recievedItems,"xit")
     

  // removing repeated items 
    this.filteredItems = this.recievedItems.reduce((acc, current) => {
      const x = acc.find(item => item.id === current.id);            
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
     
    // counting repeated items and replacing item value
    for (let i = 0; i < this.filteredItems.length; i++) {
      this.recievedItems.forEach(element => {
        if(this.filteredItems[i].id === element.id && this.filteredItems[i].name === element.name){
         this.filteredItems[i].item = this.item++;
         
        }else{
         this.item=1;
        }
        
      });
      
    }
    // assigning value to received items
    this.recievedItems = this.filteredItems;


   // counting price 
    for (let i = 0; i < this.recievedItems.length; i++) {
      const priceItem = parseInt(this.recievedItems[i].price);
      const countItem = this.recievedItems[i].item;
      const price = priceItem * countItem ;
      this.totalPrice = this.totalPrice + price;
    }
  }

 // add product function
  onAddProduct(obj){
     obj.item++;
     this._utilityServices.setSelectedItems(obj);
    this.totalPrice = this.totalPrice + parseInt(obj.price);
  }
 // remove product function
  onRemoveProduct(obj,i){
    this._utilityServices.removeSelectedItems(obj,i);
    if(obj.item<2 && obj.item>0){
      this.recievedItems.splice(i,1)
      this.totalPrice = this.totalPrice - obj.price;
    }else{
      obj.item = obj.item - 1;
      this.totalPrice = this.totalPrice - obj.price;
    }
    this._utilityServices.dataChange.next("data Remove");  // sending value on every change
  }


  

  // check out button function
   checkOut(){
      this.router.navigateByUrl('/checkout');
      this._utilityServices.isCheckOut.next(false)
   }

}
