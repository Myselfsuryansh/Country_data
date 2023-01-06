import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.sass'],
})
export class DistrictComponent implements OnInit {

  title ='District';
  districtname:any
  preview : string =' ';
  data : any={ };
  fetchID :any;
  STATENAME:any;
  // DISTRICTNAME: any;
  // DISTRICT :any;
  country: any;
  countryId: any;
  state: any;
  dropdownstate: any;
  stateId: any;
  getState: any;

  constructor(private route: Router, private service: InteractionService) {
    this.districtname=new FormGroup({
      countryname :new FormControl(' ', [Validators.required,Validators.minLength(1)]),
      statename :new FormControl(' ', [Validators.required, Validators.minLength(1)]),
      districtname : new FormControl(' ', [Validators.required, Validators.minLength(3)])

    })
   }
   Clickme(){
    console.log(this.districtname.value);
    alert(`Thank You`)
    this.data.countryname = this.districtname.value.countryname
    this.data.statename = this.districtname.value.statename
    this.data.districtname= this.districtname.value.districtname
    this.postDatafromApi();
    // this.postData();
    

    
   }



  ngOnInit(): void {
    this.getData();
    // this.postData();
  }

  onSelect(country: any){
    this.data.countryname = this.districtname.value.countryname
    this.countryId = this.data.countryname
      // console.log("Country",this.c);
      // console.log(this.address);
      this.getStateNameAPI(this.data.countryname)
      this.dropdownstate= []
  }
  // getStateNameAPI(statename: string){
  //   this.service.getStateName(statename).subscribe((res)=>{
  //     this.state = res;
  //     console.log(this.state);
  //     for(let value of this.state){
  //                   for(let lo of value.statename){
  //                   this.dropdownstate.push(lo.statename) 
  //                   }
  //     }
  //     console.log(this.dropdownstate);      
  //   })
  // }
  getStateNameAPI(statename: string){
    this.service.getStateName(statename).subscribe((res)=>{
      this.state = res;
      console.log(this.state);
      for(let value of this.state.STATE){
                console.log(value)
        // for (let lo of value) {
                    this.dropdownstate.push(value.statename) 
                    // }
      }
      console.log(this.dropdownstate);      
    })
  }

  

  getStateName(){
    this.getState.statename = this.districtname.value.statename
    console.log("State",this.getState);
    this.stateId = this.getState.statename
  }

  getData() {
    this.service.getData().subscribe((response: any) => {
      console.log('response from API is ', response)
      this.country = response;
    }, (error: any) => {
      console.log('error is', error);
    })
    // this.service.getState().subscribe((response:any)=>{
    //   console.log('response from API is', response)
    //   this.fetchID=response
    // }, (error)=>{
    //   console.log('error is', error)
    // })
  }
  // postData() {
  //   this.service.postData(this.data).subscribe((response: any) => {
  //     console.log('Response from API Post is', response)
  //     this.preview = JSON.stringify(response);
  //   }, (error: any) => {
  //     console.log('Error is ', error)
  //   })
  // }
  // postDatafromApi() {
  //   this.service.postState(this.data).subscribe((response: any) => {
  //     console.log('Response from API Post is', response)
  //     this.preview = JSON.stringify(response);
  //   }, (error: any) => {
  //     console.log('Error is ', error)
  //   })



  postDatafromApi() {
  this.service.postDistrict(this.data).subscribe((response: any) => {
    console.log('Response from API Post is', response)
    this.preview = JSON.stringify(response);
  }, (error: any) => {
    console.log('Error is ', error)
  })

}


}

