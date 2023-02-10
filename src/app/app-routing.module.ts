import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserPlistAdminComponent } from './user/UserPlistAdmin/UserPlistAdmin.component';
import { UserViewAdminComponent } from './user/UserViewAdmin/user-view-admin/user-view-admin.component';
import { UserRemoveAdminComponent } from './user/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { UserEditAdminComponent } from './user/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './user/UserNewAdmin/user-new-admin/user-new-admin.component';
//
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GenerateComponent } from './shared/generate/generate.component';
//
import { UsertypePlistAdminComponent } from './usertype/usertype-plist-admin/usertype-plist-admin.component';
//
import { ServicioPlistAdminComponent } from './servicio/servicio-plist-admin/servicio-plist-admin.component';
import { ServicioViewAdminComponent } from './servicio/servicio-view-admin/servicio-view-admin.component';
import { ServicioRemoveAdminComponent } from './servicio/servicio-remove-admin/servicio-remove-admin.component';
import { ServicioEditAdminComponent } from './servicio/servicio-edit-admin/servicio-edit-admin.component';
import { ServicioNewAdminComponent } from './servicio/servicio-new-admin/servicio-new-admin.component';
//
import { CitaNewAdminComponent } from './cita/cita-new-admin/cita-new-admin/cita-new-admin.component';
import { CitaEditAdminComponent } from './cita/cita-edit-admin/cita-edit-admin/cita-edit-admin.component';
import { CitaPlistAdminComponent } from './cita/cita-plist-admin/cita-plist-admin/cita-plist-admin.component';
import { CitaRemoveAdminComponent } from './cita/cita-remove-admin/cita-remove-admin/cita-remove-admin.component';
import { CitaViewAdminComponent } from './cita/cita-view-admin/cita-view-admin/cita-view-admin.component';
//
import { AnimalEditAdminComponent } from './animal/animal-edit-admin/animal-edit-admin.component';
import { AnimalNewAdminComponent } from './animal/animal-new-admin/animal-new-admin.component';
import { AnimalPlistAdminComponent } from './animal/animal-plist-admin/animal-plist-admin.component';
import { AnimalRemoveAdminComponent } from './animal/animal-remove-admin/animal-remove-admin.component';
import { AnimalViewAdminComponent } from './animal/animal-view-admin/animal-view-admin.component';
//
import { VacunaEditAdminComponent } from './vacuna/vacuna-edit-admin/vacuna-edit-admin.component';
import { VacunaNewAdminComponent } from './vacuna/vacuna-new-admin/vacuna-new-admin.component';
import { VacunaPlistAdminComponent } from './vacuna/vacuna-plist-admin/vacuna-plist-admin.component';
import { VacunaRemoveAdminComponent } from './vacuna/vacuna-remove-admin/vacuna-remove-admin.component';
import { VacunaViewAdminComponent } from './vacuna/vacuna-view-admin/vacuna-view-admin.component';
//
import { FechavacEditAdminComponent } from './fechavac/fechavac-edit-admin/fechavac-edit-admin.component';
import { FechavacNewAdminComponent } from './fechavac/fechavac-new-admin/fechavac-new-admin.component';
import { FechavacPlistAdminComponent } from './fechavac/fechavac-plist-admin/fechavac-plist-admin.component';
import { FechavacRemoveAdminComponent } from './fechavac/fechavac-remove-admin/fechavac-remove-admin.component';
import { FechavacViewAdminComponent } from './fechavac/fechavac-view-admin/fechavac-view-admin.component';




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
  { path: 'admin/user/plist/usertype/:id_usertype', component: UserPlistAdminComponent, title: 'Listado de usuarios filtrado por tipo' },
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
  {path: 'admin/cita/plist/animal/:id_animal', component: CitaPlistAdminComponent },
  {path: 'admin/cita/plist/servicio/:id_servicio', component: CitaPlistAdminComponent },
  {path: 'admin/cita/plist/user/:id_usuario', component: CitaPlistAdminComponent },
  { path: 'admin/animal/plist', component: AnimalPlistAdminComponent },
  { path: 'admin/animal/view/:id', component: AnimalViewAdminComponent },
  { path: 'admin/animal/remove/:id', component: AnimalRemoveAdminComponent },
  { path: 'admin/animal/edit/:id', component: AnimalEditAdminComponent },
  { path: 'admin/animal/new', component: AnimalNewAdminComponent },
  { path: 'admin/animal/plist/tipoanimal/:id_tipoanimal', component: AnimalPlistAdminComponent },
  { path: 'admin/vacuna/plist', component: VacunaPlistAdminComponent },
  { path: 'admin/vacuna/view/:id', component: VacunaViewAdminComponent },
  { path: 'admin/vacuna/remove/:id', component: VacunaRemoveAdminComponent },
  { path: 'admin/vacuna/edit/:id', component: VacunaEditAdminComponent },
  { path: 'admin/vacuna/new', component: VacunaNewAdminComponent },
  { path: 'admin/fechavac/plist', component: FechavacPlistAdminComponent },
  { path: 'admin/fechavac/view/:id', component: FechavacViewAdminComponent },
  { path: 'admin/fechavac/remove/:id', component: FechavacRemoveAdminComponent },
  { path: 'admin/fechavac/edit/:id', component: FechavacEditAdminComponent },
  { path: 'admin/fechavac/new', component: FechavacNewAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
