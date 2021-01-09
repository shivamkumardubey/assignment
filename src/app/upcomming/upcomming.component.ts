import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {

  constructor(private _backendService: BackendService, private _route: Router) { }
  private querySubscription;
  data=[];
  ngOnInit(): void {
    this.querySubscription=this._backendService.upcomming().subscribe((res)=>{
      this.data=res.results;
      // console.log(this.data);
    },
    (error)=>{},
    ()=>{})
  }
  

}
