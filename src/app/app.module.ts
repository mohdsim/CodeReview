import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NavigationComponent } from './navigation/navigation.component';

//  import {MatButt
  //MatButtonModule,
//         MatNativeDateModule,
//         MatIconModule,
//         MatSidenavModule,
//         MatListModule,
//         MatToolbarModule
import {MatSnackBarModule} from '@angular/material/snack-bar';

    //   } 
    //  from '@angular/material';
     import {MatToolbarModule} from '@angular/material/toolbar';
     import {} from '@angular/material/datepicker';
     import {MatIconModule} from '@angular/material/icon';
     import {MatSidenavModule} from '@angular/material/sidenav';
     import {MatListModule} from '@angular/material/list';
     import { MatNativeDateModule } from '@angular/material/core';
     import {MatDividerModule} from '@angular/material/divider';
     import { MaterialModule } from './material/material.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiTestComponent } from './api-test/api-test.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ClobleFormComponent } from './cloble-form/cloble-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { GlobleTableComponent } from './globle-table/globle-table.component';
import { CoreModuleRoutingModule } from './commanFolder/core-module/core-module-routing.module';
import { CoreModuleModule } from './commanFolder/core-module/core-module.module';
import { TestInterceptor } from './test.interceptor';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MultiFileUplodeComponent } from './multi-file-uplode/multi-file-uplode.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
//import { NgHttpLoaderModule } from 'ng-http-loader'


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NavigationComponent,
    FormComponent,
    ApiTestComponent,
   // ClobleFormComponent,
    DashboardComponent,
    DateComponent,
    GlobleTableComponent,
    MultiFileUplodeComponent,
    SentMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MaterialModule,
    ReactiveFormsModule,
     HttpClientModule,
     CoreModuleModule,
     NgHttpLoaderModule.forRoot()
    
   
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS,useClass:TestInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
