import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentsData!:any
  pagination:number=1;
  allUsers:number=0;
  constructor(private service:DataService){}
  ngOnInit() {
    this.getdata()
  }

  getdata(){
    this.service.showData().subscribe((data)=>{
      this.studentsData = data;

    })
  }
  
  removeData(id: number){
    this.service.deleteData(id).subscribe(()=>{
      alert('Data is Successfully Deleted')
      this.getdata()
    })
  }
  renderPage(event:number){
    this.pagination=event
   this.service.getDataById(this.pagination);

    
  }
}
