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
  totalPrice:number=0;
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
    this.recievedItems= this._utilityServices.selectedItems;
    this.count = this.recievedItems.length;
    console.log(this.recievedItems,"checkOut");
    // this.count = this.items.length;
    this._utilityServices.dataChange.subscribe(res=>{
      this.recievedItems= this._utilityServices.selectedItems;
    });
    // this.count = this.items.length;


    let userHashMap = {};
    this.recievedItems = this.recievedItems.filter((item,_)=>{
      let alreadyExists = userHashMap.hasOwnProperty(item.id);
      return alreadyExists? false : userHashMap[item.id] = 1;
      
    });

    console.log(JSON.stringify(this.recievedItems) + "checkout outer");

   
    for (let i = 0; i < this.recievedItems.length; i++) {
      const priceItem = parseInt(this.recievedItems[i].price);
      const countItem = this.recievedItems[i].item;
      const price = priceItem * countItem ;
      this.totalPrice = this.totalPrice + price;
      console.log(this.totalPrice,"this.totalPrice")
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

