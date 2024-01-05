import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { AuthmGuard } from './authm.guard';
import { MultiFileUplodeComponent } from './multi-file-uplode/multi-file-uplode.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path:'navigation',component:NavigationComponent
  },
  {
    path:'fileUplode',component:MultiFileUplodeComponent
  },
  {
    path:'formatdate',component:DateComponent
  },
  {
    path:'mailComponent',component:SentMailComponent
  },
  {path:'testgraf',component:ChartComponent},
  {
    path:'dashboard',component:DashboardComponent,canActivate:[AuthmGuard]
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
  {
    path:'share',loadChildren:()=>import('./shared/shared.module').then((m)=>m.SharedModule)
  },
 
  //  { path: '', component: FirstComponent, data: { title: 'First Component' } },
   { path: 'first', component: FirstComponent},
   {
    path:'components',loadChildren:()=>import('./commanModule/components/components/components.module').then((m)=>m.ComponentsModule)
   },
   {
    path:'students',loadChildren:()=> import('./commanModule/students-data/students-data.module').then((m)=>m.StudentsDataModule)
   }
  //  {
  //   path:'a',loadChildren:()=>import('./commanModule/components/components.module').then((m)=>m.ComponentsModule)
  //  }
  // { path: 'second', component: SecondComponent, data: { title: 'Second Component' } }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
