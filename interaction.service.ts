import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 

  constructor( private http: HttpClient) { }
  // getData() {
  //   return this.http.get('http://localhost:3000/fetch')
  // }
  getData() {
    return this.http.get('http://localhost:3000/country')
  }




  // postData(data:string){
  //   return this.http.post('http://localhost:3000/postData',data)
  // }
  postData(data:string){
    return this.http.post('http://localhost:3000/country',data)
  }




  // postCountry(data:any){
  //   return this.http.post('http://localhost:3000/COUNTRY/'+data.COUNTRY, data)
  // }
  // postCountry(data:any){
  //   return this.http.post('http://localhost:3000/country/'+data.countryname,data)
  // }

  postCountry(data:any){
    return this.http.post('http://localhost:3000/country/'+data.countryname,data)
  }




  // postState(data:any){
  //   return this.http.post('http://localhost:3000/COUNTRY/' +data.COUNTRY, data)
  // }
  // postState(data:any){
  //   return this.http.post('http://localhost:3000/country/' +data.countryname, data)
  // }




  // getState(){
  //   return this.http.get('http://localhost:3000/fetch/STATE')
  // }
  getState(){
    return this.http.get('http://localhost:3000/country/statename')
  }




  // getStateName(COUNTRY: String){
  //   return this.http.get('http://localhost:3000/COUNTRY/'+COUNTRY)
  // }
  getStateName(countryname: String){
    return this.http.get('http://localhost:3000/country/'+countryname)
  }




  postDistrict(data:any){
    return this.http.post('http://localhost:3000/country/'+data.countryname+'/'+data.statename,data)
  }
  // postState(COUNTRY: string, STATE: any){
  //   return this.http.pos

  // }
}
