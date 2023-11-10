import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

saveData(data: any){
  return this.http.post('http://localhost:3000/comments',data)

}

showData(){
  return this.http.get('http://localhost:3000/comments')

}
showDataById(id:number){
  return this.http.get(`http://localhost:3000/comments/${id}`)

}
getDataById(page:number){
  return this.http.get(`http://localhost:3000/comments/${page}`)

}
deleteData(id:number){
  return this.http.delete(`http://localhost:3000/comments/${id}`)

}
changesData(id:number,data:any){
  return this.http.put(`http://localhost:3000/comments/${id}`,data)

}


}
