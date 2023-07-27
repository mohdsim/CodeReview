import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiTestComponent } from './api-test/api-test.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
//import { GlobleTableComponent } from './globle-table/globle-table.component';
import { CoreModuleModule } from './commanFolder/core-module/core-module.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MultiFileUplodeComponent } from './multi-file-uplode/multi-file-uplode.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { SharedModule } from './shared/shared.module';
import { PageInterceptor } from './page.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NavigationComponent,
    FormComponent,
    ApiTestComponent,
    DashboardComponent,
    DateComponent,
    MultiFileUplodeComponent,
    SentMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModuleModule,
    NgHttpLoaderModule.forRoot()


  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:PageInterceptor ,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
