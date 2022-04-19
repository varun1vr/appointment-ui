import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { HttpService } from './services/http.service';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MessageService } from './services/message.service';
import { authInterceptorProviders } from './core/helper/auth.interceptor';
import { EstablishmentModule } from './establishment/establishment.module';
import { EstablishmentRoutingModule } from './establishment/establishment-routing.module';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    CoreModule    ,
    DashboardModule,
    DashboardRoutingModule,
    MatSnackBarModule,
    EstablishmentModule,
    EstablishmentRoutingModule,
    MatTableModule
  ],
  providers: [HttpService, MessageService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
