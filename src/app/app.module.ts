import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { BallybritComponent } from './ballybrit/ballybrit.component';
import { RenmoreComponent } from './renmore/renmore.component';
import { SalthillComponent } from './salthill/salthill.component';
import { NewcastleComponent } from './newcastle/newcastle.component';
import { SaleComponent } from './sale/sale.component';
import { RentComponent } from './rent/rent.component';
import {MatSliderModule} from '@angular/material/slider';
import { HomepageComponent } from './homepage/homepage.component';
import { AllhomesComponent } from './allhomes/allhomes.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    EditComponent,
    BallybritComponent,
    RenmoreComponent,
    SalthillComponent,
    NewcastleComponent,
    SaleComponent,
    RentComponent,
    HomepageComponent,
    AllhomesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSliderModule,
    MDBBootstrapModule.forRoot()

  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
