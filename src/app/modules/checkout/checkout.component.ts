import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityserviceService } from 'src/app/utilityservice.service';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from '../dailog/dailog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy{

  myReactiveForm:FormGroup;
  formStatus;
  recievedItems=[];
  count;
  item:number=1;
  totalPrice:number=0;
  price:number;
  filteredItems=[];
  constructor(private _utilityServices:UtilityserviceService,public dialog: MatDialog) { 
    
  }

  ngOnInit() {

    this.myReactiveForm = new FormGroup({
      'fullname': new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]), // validators for user name
      'email': new FormControl(null,[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      'address': new FormControl(null,[Validators.required]),
      'city' : new FormControl(null,Validators.required),
      'state': new FormControl(null,Validators.required),
      'zip': new FormControl(null,Validators.required)
    });

    this.myReactiveForm.statusChanges.subscribe((status)=>{console.log(status)
    this.formStatus=status})

    this._utilityServices.isCheckOut.next(false);
    this.recievedItems = JSON.parse(localStorage.getItem('header'));
    this.count = this.recievedItems.length;
    
    this._utilityServices.dataChange.subscribe(res=>{
      this.recievedItems = JSON.parse(localStorage.getItem('header'))
    });


   this.recievedItems.sort((a , b) =>{return a.id - b.id ;})   //sorting of array

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
       if(this.filteredItems[i].id === element.id){
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

  ngOnDestroy(){
    this._utilityServices.isCheckOut.next(true);
  }


  openDialog() {
    const dialogRef = this.dialog.open(DashboardComponent);
    this._utilityServices.clearCart();

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    const data = this._utilityServices.selectedItems.length;

   this._utilityServices.selectedItems.splice(0,data);
    this._utilityServices.dataChange.next("changed")
    
  }
}

