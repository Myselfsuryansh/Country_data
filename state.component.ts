import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.sass']
})
export class StateComponent implements OnInit {

  title = 'State';
  formtwo:any
  data: any = { };

  preview: string = '';
  fetchID: any;
  COUNTRY:any;
  STATENAME: any


  

  constructor(private router:Router, private service: InteractionService) {

    this.formtwo= new FormGroup({
      countryname :new FormControl('', [Validators.required]),
      statename: new FormControl('',[Validators.required, Validators.minLength(2)])
    })
   }
   Clickme(){
    console.log(this.formtwo.value);
    alert(`Thank You`)
    
    this.data.countryname = this.formtwo.value.countryname
    this.data.statename = this.formtwo.value.statename
    this.postDatafromApi();
   }
   
  //  STATE(){
  //   console.log(this.statename.value)
  //  }

  ngOnInit(): void {
    this.getData()
    
    // this.postData();

  }
  getData() {
    this.service.getData().subscribe((response: any) => {
      console.log('response from API is ', response)
      this.fetchID = response;
    }, (error: any) => {
      console.log('error is', error);
    })
  }
  // postData() {
  //   this.service.postData(this.data).subscribe((response: any) => {
  //     console.log('Response from API Post is', response)
  //     this.preview = JSON.stringify(response);
  //   }, (error: any) => {
  //     console.log('Error is ', error)
  //   })

  postDatafromApi() {
      this.service.postCountry(this.data).subscribe((response: any) => {
        console.log('Response from API Post is', response)
        this.preview = JSON.stringify(response);
      }, (error: any) => {
        console.log('Error is ', error)
      })

  }
  

  

 

}
