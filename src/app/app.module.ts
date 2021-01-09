import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BackendService} from './services/backend.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TopratedComponent,
    UpcommingComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
