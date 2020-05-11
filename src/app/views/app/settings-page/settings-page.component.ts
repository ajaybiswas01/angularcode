import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../data/api.service'
@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
})
export class SettingsPageComponent implements OnInit {
  fulldata:any;
  sendData:any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getProducts().subscribe(data=>{
      data=data;
      this.fulldata=data['data'];
      console.log('fulldata', this.fulldata)
    })

    this.apiService.getApiCall().subscribe(data=>{
      console.log('data', data);
    })
  }

  deleteFun(){
    this.sendData=[{
      'area_name':'Location name will be here',
    }]
    this.apiService.delCate(this.sendData).subscribe((data: Response)=>{
      console.log('data res', data);
    })
  }
}
