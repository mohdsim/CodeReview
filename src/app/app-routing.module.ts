import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { GlobleTableComponent } from './globle-table/globle-table.component';

const routes: Routes = [
  {
    path:'navigation',component:NavigationComponent
  },
  {
    path:'formatdate',component:DateComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'globleTableData',component:GlobleTableComponent
  },
  {
    path:'reactiveForm',component:FormComponent
  },
  {
    path:'dataShairing',loadChildren:()=> import('./data-shairing/data-shairing.module').then((m)=>m.DataShairingModule)
  },
  {
    path:'apiTest',component:ApiTestComponent
  },
 
  //  { path: '', component: FirstComponent, data: { title: 'First Component' } },
   { path: 'first', component: FirstComponent},
  // { path: 'second', component: SecondComponent, data: { title: 'Second Component' } }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
