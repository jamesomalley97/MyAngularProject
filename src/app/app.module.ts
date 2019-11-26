import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {MatRadioModule} from '@angular/material/radio';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { BallybritComponent } from './ballybrit/ballybrit.component';
import { BallybaneComponent } from './ballybane/ballybane.component';
import { RenmoreComponent } from './renmore/renmore.component';
import { SalthillComponent } from './salthill/salthill.component';
import { NewcastleComponent } from './newcastle/newcastle.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    EditComponent,
    BallybritComponent,
    BallybaneComponent,
    RenmoreComponent,
    SalthillComponent,
    NewcastleComponent

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
MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
