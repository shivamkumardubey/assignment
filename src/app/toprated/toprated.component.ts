import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  constructor(private _backendService: BackendService, private _route: Router) { }
  private querySubscription;
  data=[];
  ngOnInit(): void {
    this.querySubscription=this._backendService.getTopRated().subscribe((res)=>{
      this.data=res.results;
      // console.log(this.data);
    },
    (error)=>{},
    ()=>{})
  }
  
}
