import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { CiudadComponent } from "./components/ciudad/ciudad.component";


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'admin/:user', component: AdminComponent},
  {path:'ciudad/:i', component: CiudadComponent},
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
