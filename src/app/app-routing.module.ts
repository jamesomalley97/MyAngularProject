import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateComponent} from './create/create.component';
import {ReadComponent} from './read/read.component';
import { createComponent } from '@angular/compiler/src/core';




const routes: Routes = [
{
  path: 'read',
  component:ReadComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
