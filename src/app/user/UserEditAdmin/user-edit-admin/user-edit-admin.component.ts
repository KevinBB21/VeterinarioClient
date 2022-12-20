import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUser2Form, IUser2Send } from 'src/app/model/generic';
import { UserService } from 'src/app/service/User.service';


declare let bootstrap: any;
@Component({
  selector: 'app-user-edit-admin',
  templateUrl: './user-edit-admin.component.html',
  styleUrls: ['./user-edit-admin.component.css']
})
export class UserEditAdminComponent implements OnInit {


  id: number = 0;
  oUser: IUser = null;
  oUser2Form: IUser2Form = null;
  oUser2Send: IUser2Send = null;
  oForm: FormGroup<IUser2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  usertypeDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          name: [data.name, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          dni: [data.dni, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
          surname1: [data.surname1, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          surname2: [data.surname2, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          username: [data.username, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        });
       // this.updateUsertypeDescription(this.oUser.usertype.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Send = {
      id: this.oForm.value.id,
      dni: this.oForm.value.dni,
      name: this.oForm.value.name,
      surname1: this.oForm.value.surname1,
      surname2: this.oForm.value.surname2,
      email: this.oForm.value.email,
      username: this.oForm.value.username,
      usertype: { id: 2 }
    }
    if (this.oForm.valid) {
      this.oUserService.updateOne(this.oUser2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "User " + this.id + " updated";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/user/view', this.id])
    })
    this.myModal.show()
  }
/*
  openModalFindUsertype(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsertype"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeUsertypeModal(id_Usertype: number) {
    this.oForm.controls['id_Usertype'].setValue(id_Usertype);
    this.updateUsertypeDescription(id_Usertype);
    this.myModal.hide();
  }

  updateUsertypeDescription(id_Usertype: number) {
    this.oUsertypeService.getOne(id_Usertype).subscribe({
      next: (data: IUsertype) => {      
        this.UsertypeDescription = data.name;        
      },
      error: (error: any) => {
        this.UsertypeDescription = "Usertype not found";        
        this.oForm.controls['id_Usertype'].setErrors({'incorrect': true});
      }
    })
  }

*/
  //openModalFindUsertype(): void {

  }

