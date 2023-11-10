import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'list',component:ListComponent},
  {path:'list/form/:id',component:FormComponent},
  {path:'',component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
