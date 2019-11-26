import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateComponent} from './create/create.component';
import {ReadComponent} from './read/read.component';
import { EditComponent } from './edit/edit.component';
import { RenmoreComponent } from './renmore/renmore.component';
import { NewcastleComponent } from './newcastle/newcastle.component';
import { SalthillComponent } from './salthill/salthill.component';
import { BallybritComponent } from './ballybrit/ballybrit.component';






const routes: Routes = [
{
  path: 'read',
  component:ReadComponent
},

{
 path: 'create',
 component:CreateComponent
},

{
  path: 'renmore',
  component:RenmoreComponent
 },

 {
  path: 'ballybrit',
  component:BallybritComponent
 },

 {
  path: 'salthill',
  component:SalthillComponent
 },

 {
  path: 'newcastle',
  component:NewcastleComponent
 },


{
  path:'edit/:id',
  component: EditComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
