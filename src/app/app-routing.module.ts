import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedinComponent } from './loggedin/loggedin.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loggedin', component: LoggedinComponent }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
