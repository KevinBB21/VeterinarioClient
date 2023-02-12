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
import { CitaEditAdminComponent } from './cita/routed/cita-edit-admin/cita-edit-admin/cita-edit-admin.component';
import { CitaNewAdminComponent } from './cita/routed/cita-new-admin/cita-new-admin/cita-new-admin.component';
import { CitaPlistAdminComponent } from './cita/routed/cita-plist-admin/cita-plist-admin/cita-plist-admin.component';
import { CitaRemoveAdminComponent } from './cita/routed/cita-remove-admin/cita-remove-admin/cita-remove-admin.component';
import { CitaViewAdminComponent } from './cita/routed/cita-view-admin/cita-view-admin/cita-view-admin.component';
import { CitaDetailAdminComponent } from './cita/unrouted/cita-detail-admin/cita-detail-admin.component';
import { ServicioFinderAdminComponent } from './servicio/unrouted/servicio-finder-admin/servicio-finder-admin.component';
import { AnimalFinderAdminComponent } from './animal/unrouted/animal-finder-admin/animal-finder-admin.component';
import { UserFinderAdminComponent } from './user/unrouted/admin/user-finder-admin/user-finder-admin.component';
import { TipoanimalFinderAdminComponent } from './tipoanimal/unrouted/tipoanimal-finder-admin/tipoanimal-finder-admin.component';
import { AnimalViewAdminComponent } from './animal/animal-view-admin/animal-view-admin.component';
import { AnimalRemoveAdminComponent } from './animal/animal-remove-admin/animal-remove-admin.component';
import { AnimalPlistAdminComponent } from './animal/animal-plist-admin/animal-plist-admin.component';
import { AnimalEditAdminComponent } from './animal/animal-edit-admin/animal-edit-admin.component';
import { AnimalNewAdminComponent } from './animal/animal-new-admin/animal-new-admin.component';
import { AnimalDetailAdminComponent } from './animal/unrouted/animal-detail-admin/animal-detail-admin.component';
import { VacunaViewAdminComponent } from './vacuna/vacuna-view-admin/vacuna-view-admin.component';
import { VacunaRemoveAdminComponent } from './vacuna/vacuna-remove-admin/vacuna-remove-admin.component';
import { VacunaEditAdminComponent } from './vacuna/vacuna-edit-admin/vacuna-edit-admin.component';
import { VacunaNewAdminComponent } from './vacuna/vacuna-new-admin/vacuna-new-admin.component';
import { VacunaPlistAdminComponent } from './vacuna/vacuna-plist-admin/vacuna-plist-admin.component';
import { VacunaDetailAdminComponent } from './vacuna/unrouted/vacuna-detail-admin/vacuna-detail-admin.component';
import { VacunaFinderAdminComponent } from './vacuna/unrouted/vacuna-finder-admin/vacuna-finder-admin.component';
import { FechavacViewAdminComponent } from './fechavac/routed/fechavac-view-admin/fechavac-view-admin.component';
import { FechavacRemoveAdminComponent } from './fechavac/routed/fechavac-remove-admin/fechavac-remove-admin.component';
import { FechavacPlistAdminComponent } from './fechavac/routed/fechavac-plist-admin/fechavac-plist-admin.component';
import { FechavacEditAdminComponent } from './fechavac/routed/fechavac-edit-admin/fechavac-edit-admin.component';
import { FechavacNewAdminComponent } from './fechavac/routed/fechavac-new-admin/fechavac-new-admin.component';
import { FechavacDetailAdminComponent } from './fechavac/unrouted/fechavac-detail-admin/fechavac-detail-admin.component';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FechavacEventoUserComponent } from './fechavac/routed/fechavac-evento-user/fechavac-evento-user.component';
import { FechavacFormUserComponent } from './fechavac/routed/fechavac-form-user/fechavac-form-user.component';


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
    TipoanimalFinderAdminComponent,
    AnimalViewAdminComponent,
    AnimalRemoveAdminComponent,
    AnimalPlistAdminComponent,
    AnimalEditAdminComponent,
    AnimalNewAdminComponent,
    AnimalDetailAdminComponent,
    VacunaViewAdminComponent,
    VacunaRemoveAdminComponent,
    VacunaEditAdminComponent,
    VacunaNewAdminComponent,
    VacunaPlistAdminComponent,
    VacunaDetailAdminComponent,
    VacunaFinderAdminComponent,
    FechavacViewAdminComponent,
    FechavacRemoveAdminComponent,
    FechavacPlistAdminComponent,
    FechavacEditAdminComponent,
    FechavacNewAdminComponent,
    FechavacDetailAdminComponent,
    FechavacEventoUserComponent,
    FechavacFormUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    CryptoService,
    PaginationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
