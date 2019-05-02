import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { DDisplayComponent } from './d-display/d-display.component';
const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'login', component: LoginComponent},
  { path : 'aboutUs', component: AboutUsComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'admin', component: AdminComponent},
  { path : 'employee', component: EmployeeComponent},
  { path : 'd-display', component: DDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
