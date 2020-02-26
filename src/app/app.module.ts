import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UlazniPodaciComponent } from './ulazni-podaci/ulazni-podaci.component';
import { EditiraniPodaciComponent } from './editirani-podaci/editirani-podaci.component';

@NgModule({
  declarations: [
    AppComponent,
    UlazniPodaciComponent,
    EditiraniPodaciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
