import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { contentRoutes } from './shared/routes/content.routes';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [

  // { path: 'auth/login', component: LoginComponent },
  
    // AuthGuard
 //  { path: '', component: LayoutComponent, children: contentRoutes }

 // {path:'',component:LoginComponent} //Added by me

// { path: '', component: LayoutComponent, children: contentRoutes,canActivate : [AuthGuard] }

{ path: '', component: LayoutComponent, children: contentRoutes }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
