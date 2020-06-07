import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityserviceService {
  selectedItems=[];
  // count =0;
  clickedKey:string;
  isCheckOut = new BehaviorSubject<any>('true');
  dataChange = new Subject<any>();


  constructor(private _http:HttpClient) { }
    bread:string="https://webdev-a8f7a.firebaseio.com/"+"bread"+".json";
    dairy:string="https://webdev-a8f7a.firebaseio.com/"+"dairy"+".json";
    fruits:string="https://webdev-a8f7a.firebaseio.com/"+"fruits"+".json";
    seasioning:string="https://webdev-a8f7a.firebaseio.com/"+"seasioning"+".json";
    vegitables:string="https://webdev-a8f7a.firebaseio.com/"+"vegitables"+".json";
    // allData:string
  //  API_KEY = '16605219-537f0a583adfa8eb5ce252fe9';
  //  URL = "https://pixabay.com/api/?key="+this.API_KEY+"&q="+encodeURIComponent(this.clickedKey);

  breadData():Observable<any>{
     return this._http.get(this.bread)
   }

   dairyData():Observable<any>{
    return this._http.get(this.dairy)
  }

  fruitsData():Observable<any>{
    return this._http.get(this.fruits)
  }

  seasioningData():Observable<any>{
    return this._http.get(this.seasioning)
  }

  vegitablesData():Observable<any>{
    return this._http.get(this.vegitables)
  }
  allData(id){
    return this._http.get("https://webdev-a8f7a.firebaseio.com/"+id+".json")
  }

  // cartItems = new Subject<any>();


  setSelectedItems(obj){
    this.selectedItems.push(obj);
    // this.cartItems.next(this.selectedItems)
    this.dataChange.next("data Add");
  }

  removeSelectedItems(obj,index){
    let flag = true;
    this.selectedItems.forEach((data, index) => { if (data.brand ===obj.brand) { 
     
      if(flag){
        this.selectedItems.splice(index, 1);
        flag = false;
      }} });
      this.dataChange.next("data remove")
  }

  getSelectedItems(){
    return this.selectedItems;
  };

  clearCart(){
    this.selectedItems = [];
    return this.selectedItems; 
  }

   
}
