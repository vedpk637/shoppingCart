import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityserviceService } from 'src/app/utilityservice.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit{

  constructor(private router:Router,private utilityServices:UtilityserviceService) {
    this.utilityServices.isCheckOut.subscribe(res=>{this.isCheckOut=res;console.log(res,"dashhh")})
   }
  
  isCheckOut:boolean=true;
  ngOnInit() {

    // this._activatedRoute.params.subscribe(res=>{console.log(res),"route"})
    console.log(this.router.url,"route");
    if(this.router.url === '/checkout'){
      this.isCheckOut = false;
    }
  }
  
}
