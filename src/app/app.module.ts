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
import { HttpClientModule } from '@angular/common/http';
import { ClobleFormComponent } from './cloble-form/cloble-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NavigationComponent,
    FormComponent,
    ApiTestComponent,
    ClobleFormComponent,
    DashboardComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MaterialModule,
    ReactiveFormsModule,
     HttpClientModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
