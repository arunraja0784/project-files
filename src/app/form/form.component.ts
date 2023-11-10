import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
 course:any[]=["Java","Nodejs","Phython",];
 formData!: FormGroup;
 id!:number
 constructor( private service:DataService,private build:FormBuilder,private router:Router,private route:ActivatedRoute){

  this.formData= this.build.group({
    firstname:['',Validators.required],
    email:['',Validators.required],
    number:['',Validators.required],
    address:['',Validators.required],
    date:['',Validators.required],
    course:['',Validators.required],

    

  })

 }
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.service.showDataById(this.id).subscribe((data)=>{
      this.formData.patchValue(data)
    })


  }

 storeData(){
  if (this.formData.invalid) {
    return;
}
  
  if(!this.id){
  this.service.saveData(this.formData.value).subscribe(()=>{
    alert("Data is Succesfully stored")
    this.formData.reset()
    this.router.navigate(['list'])
  })

 }
}

 get f(){
  return this.formData.controls
 }

 updateData(){
  if(this.id){
  this.service.changesData(this.id,this.formData.value).subscribe(()=>{
    alert("Data is Updated")
    this.formData.reset()

  })
}

 }


}
