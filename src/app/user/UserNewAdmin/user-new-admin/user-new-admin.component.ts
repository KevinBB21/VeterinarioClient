import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, IUser2Form, IUser2Send } from 'src/app/model/user-interface';
import { Usertype } from 'src/app/model/usertype-response-interface';
import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';
import { UsertypeService } from 'src/app/service/usertype.service';

declare let bootstrap: any;
@Component({
  selector: 'app-user-new-admin',
  templateUrl: './user-new-admin.component.html',
  styleUrls: ['./user-new-admin.component.css']
})
export class UserNewAdminComponent implements OnInit {


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
  UsertypeDescription: string = "";
  id_usertype:number;

  constructor(
    private oRouter: Router,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oUsertypeService: UsertypeService
  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      dni: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      surname1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      surname2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      id_usertype: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
    });
    this.updateUsertypeDescription(this.id_usertype);
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
      usertype: {id: this.oForm.value.id_usertype}
    }
    if (this.oForm.valid) {
      this.oUserService.newOne(this.oUser2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "User " + data + " created";
          this.showModal(data);
        }
      })
    }

  }



  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/user/view', data])
    })
    this.myModal.show()
  }

  updateUsertypeDescription(id_usertype: number) {
    this.oUsertypeService.getOne(id_usertype).subscribe({
      next: (data: Usertype) => {
        this.UsertypeDescription = data.name;
      },
      error: (error: any) => {
        this.UsertypeDescription = "Usertype not found";
        this.oForm.controls['id_usertype'].setErrors({'incorrect': true});
      }
    })
  }
  closeUsertypeModal(id_usertype: number) {
    this.oForm.controls['id_usertype'].setValue(id_usertype);
    this.updateUsertypeDescription(id_usertype);
    this.myModal.hide();
  }

  openModalFindUsertype(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsertype"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

}

