import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.sass']
})
export class PlaceComponent implements OnInit {

  title =  'country';
  formone :any
  preview: string = '';
  data:any={}; 

  constructor(private router: Router, private service: InteractionService ) { 

    this.formone = new FormGroup({
      countryname: new FormControl('',[Validators.required, Validators.minLength(3),]),
    })
  }
    

  Clickme(){
    console.log(this.formone.value)
    // alert(`Country is ${this.formone.value.countryname}`);
    this.data.countryname  = this.formone.value.countryname
    this.postData()
  }

  ngOnInit(): void {
    this.postData();

  }
  postData() {
    this.service.postData(this.data).subscribe((response: any) => {
      console.log('Response from API Post is', response)
      this.preview = JSON.stringify(response);
    }, (error: any) => {
      console.log('Error is ', error)
    })
  }

}
