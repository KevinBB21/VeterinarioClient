import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserPlistAdminComponent } from './user/UserPlistAdmin/UserPlistAdmin.component';
import { UserViewAdminComponent } from './user/UserViewAdmin/user-view-admin/user-view-admin.component';
import { UserRemoveAdminComponent } from './user/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { UserEditAdminComponent } from './user/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './user/UserNewAdmin/user-new-admin/user-new-admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GenerateComponent } from './shared/generate/generate.component';
import { UsertypePlistAdminComponent } from './usertype/usertype-plist-admin/usertype-plist-admin.component';
import { ServicioPlistAdminComponent } from './servicio/servicio-plist-admin/servicio-plist-admin.component';
import { ServicioViewAdminComponent } from './servicio/servicio-view-admin/servicio-view-admin.component';
import { ServicioRemoveAdminComponent } from './servicio/servicio-remove-admin/servicio-remove-admin.component';
import { ServicioEditAdminComponent } from './servicio/servicio-edit-admin/servicio-edit-admin.component';
import { ServicioNewAdminComponent } from './servicio/servicio-new-admin/servicio-new-admin.component';
import { CitaNewAdminComponent } from './cita/cita-new-admin/cita-new-admin/cita-new-admin.component';
import { CitaEditAdminComponent } from './cita/cita-edit-admin/cita-edit-admin/cita-edit-admin.component';
import { CitaPlistAdminComponent } from './cita/cita-plist-admin/cita-plist-admin/cita-plist-admin.component';
import { CitaRemoveAdminComponent } from './cita/cita-remove-admin/cita-remove-admin/cita-remove-admin.component';
import { CitaViewAdminComponent } from './cita/cita-view-admin/cita-view-admin/cita-view-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin/user/plist', component: UserPlistAdminComponent },
  { path: 'admin/user/view/:id', component: UserViewAdminComponent },
  { path: 'admin/user/remove/:id', component: UserRemoveAdminComponent },
  { path: 'admin/user/edit/:id', component: UserEditAdminComponent },
  { path: 'admin/user/new', component: UserNewAdminComponent },
  { path: 'generate' , component: GenerateComponent},
  { path: 'admin/usertype/plist', component: UsertypePlistAdminComponent },
  { path: 'admin/servicio/plist', component: ServicioPlistAdminComponent },
  { path: 'admin/servicio/view/:id', component: ServicioViewAdminComponent },
  { path: 'admin/servicio/remove/:id', component: ServicioRemoveAdminComponent },
  { path: 'admin/servicio/edit/:id', component: ServicioEditAdminComponent },
  { path: 'admin/servicio/new', component: ServicioNewAdminComponent },
  { path: 'admin/cita/plist', component: CitaPlistAdminComponent },
  { path: 'admin/cita/view/:id', component: CitaViewAdminComponent },
  { path: 'admin/cita/remove/:id', component: CitaRemoveAdminComponent },
  { path: 'admin/cita/edit/:id', component: CitaEditAdminComponent },
  { path: 'admin/cita/new', component: CitaNewAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
