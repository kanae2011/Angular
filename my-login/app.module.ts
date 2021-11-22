import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule,Routes} from '@angular/router' //라우터
import { ReactiveFormsModule } from '@angular/forms'; //반응형 폼?


const router : Routes = [  //라우팅
  {path : 'login' , component : LoginComponent},  
  {path : 'dashboard' , component : DashboardComponent},
  {path : '', redirectTo : '/login', pathMatch : 'full'},
  {path: '**',redirectTo : '/login', pathMatch : 'full' }
]

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing:false, useHash:true}),
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
