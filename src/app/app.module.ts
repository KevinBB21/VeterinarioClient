import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPlistAdminComponent } from './user/UserPlistAdmin/UserPlistAdmin.component';
import { HomeComponent } from './home/home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UserService } from './service/User.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchUnroutedComponent } from './shared/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './shared/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './shared/pagination-unrouted/pagination-unrouted.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationService } from './service/pagination.service';
import { UserViewAdminComponent } from './user/UserViewAdmin/user-view-admin/user-view-admin.component';
import { UserNewAdminComponent } from './user/UserNewAdmin/user-new-admin/user-new-admin.component';
import { UserEditAdminComponent } from './user/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserDetailAdminUnroutedComponent } from './user/unrouted/admin/user-detail-admin-unrouted/user-detail-admin-unrouted.component';
import { UserRemoveAdminComponent } from './user/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsertypeFinderAdminUnroutedComponent } from './usertype/unrouted/tipousuario-finder-admin-unrouted/usertype-finder-admin-unrouted.component';
import { GenerateComponent } from './shared/generate/generate.component';
import { UsertypePlistAdminComponent } from './usertype/usertype-plist-admin/usertype-plist-admin.component';
import { CryptoService } from './service/crypto.service';
import { ServicioPlistAdminComponent } from './servicio/servicio-plist-admin/servicio-plist-admin.component';
import { ServicioViewAdminComponent } from './servicio/servicio-view-admin/servicio-view-admin.component';
import { ServicioNewAdminComponent } from './servicio/servicio-new-admin/servicio-new-admin.component';
import { ServicioEditAdminComponent } from './servicio/servicio-edit-admin/servicio-edit-admin.component';
import { ServicioRemoveAdminComponent } from './servicio/servicio-remove-admin/servicio-remove-admin.component';
import { ServicioDetailAdminComponent } from './servicio/unrouted/servicio-detail-admin/servicio-detail-admin.component';
import { TiposervicioFinderAdminComponent } from './tiposervicio/unrouted/tiposervicio-finder-admin/tiposervicio-finder-admin.component';
import { CitaEditAdminComponent } from './cita/cita-edit-admin/cita-edit-admin/cita-edit-admin.component';
import { CitaNewAdminComponent } from './cita/cita-new-admin/cita-new-admin/cita-new-admin.component';
import { CitaPlistAdminComponent } from './cita/cita-plist-admin/cita-plist-admin/cita-plist-admin.component';
import { CitaRemoveAdminComponent } from './cita/cita-remove-admin/cita-remove-admin/cita-remove-admin.component';
import { CitaViewAdminComponent } from './cita/cita-view-admin/cita-view-admin/cita-view-admin.component';
import { CitaDetailAdminComponent } from './cita/unrouted/cita-detail-admin/cita-detail-admin.component';
import { ServicioFinderAdminComponent } from './servicio/unrouted/servicio-finder-admin/servicio-finder-admin.component';
import { AnimalFinderAdminComponent } from './animal/unrouted/animal-finder-admin/animal-finder-admin.component';
import { UserFinderAdminComponent } from './user/unrouted/admin/user-finder-admin/user-finder-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPlistAdminComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UserViewAdminComponent,
    UserNewAdminComponent,
    UserEditAdminComponent,
    UserRemoveAdminComponent,
    UserDetailAdminUnroutedComponent,
    UsertypeFinderAdminUnroutedComponent,
    GenerateComponent,
    UsertypePlistAdminComponent,
    ServicioPlistAdminComponent,
    ServicioViewAdminComponent,
    ServicioNewAdminComponent,
    ServicioEditAdminComponent,
    ServicioRemoveAdminComponent,
    ServicioDetailAdminComponent,
    TiposervicioFinderAdminComponent,
    CitaEditAdminComponent,
    CitaNewAdminComponent,
    CitaPlistAdminComponent,
    CitaRemoveAdminComponent,
    CitaViewAdminComponent,
    CitaDetailAdminComponent,
    ServicioFinderAdminComponent,
    AnimalFinderAdminComponent,
    UserFinderAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    CryptoService,
    PaginationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
