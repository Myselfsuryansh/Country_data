import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { InteractionService } from './interaction.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewdataComponent } from './viewdata/viewdata.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    StateComponent,
    DistrictComponent,
    ViewdataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
