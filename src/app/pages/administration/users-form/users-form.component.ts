import { Component,EventEmitter  } from '@angular/core';
declare var $: any;
declare var jQuery: any;
//Services
import {UsersService} from '../users/users.service';
//Models
import {UsersModel } from '../users/users.model';
import {Router} from '@angular/router'
import {NbToastrService,NbComponentStatus,NbGlobalLogicalPosition, NbGlobalPosition, NbGlobalPhysicalPosition} from '@nebular/theme';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'ngx-smart-table',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss'],
  })
export class UsersFormComponent {

  match : boolean = true;
  user: UsersModel = this.router.getCurrentNavigation().extras.state.user;
  edit : boolean = this.router.getCurrentNavigation().extras.state.edit;

  //Toastr configuration
  position:NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  status: NbComponentStatus = 'success'
  duration = 4000;
  destroyByClick = false;
  hasIcon = true;
  index = 1;
  preventDuplicates = false;

  constructor(public usersService:UsersService, public usersModel:UsersModel,
    private router:Router, private toastrService: NbToastrService) {

        $(() => {
            $('.dropify').dropify({messages: {
              'default': 'Arrastra aqui o click',
              'replace': 'Arrastra aqui o click',
              'remove':  'Eliminar',
              'error':   'Ooops, algo salió mal.'
            },
            defaultFile: this.user.avatar,
          });
          });

    }

  addUserForm(userForm:NgForm){
    if (userForm.valid){
      if(userForm.value.password == userForm.value.confirm_password){
        this.match = true;
      }else{
        this.match = false;
      }
      if (this.match){
        this.usersService.createUser(this.user).subscribe(data=>{
        if (data){
          if (!data.error){
            console.log(data)
            this.showToast('success','Se ha creado una disciplina exitosamente','Se ha creado la disciplina ' + this.user.first_name + ' de manera exitosa.')
            this.router.navigate(['/pages/administration/users']);

          }else{
            this.showToast('danger','Hubo un error al crear el usuario',data.error.error)
            this.router.navigate(['/pages/administration/users']);
            console.log(data.error.error)
          }
          }
        });
      }
    }
  }

  editUserForm(userForm:NgForm){
    if (userForm.valid){ 
        if(userForm.value.password == userForm.value.confirm_password){
            this.match = true;
        }else{
            this.match = false;
        }
        if (this.match){
            this.usersService.updateUser(this.user).subscribe(data=>{
                if (data && !data.error){
                    console.log("Yay")
                    this.showToast('success','Se ha modificado una comisión exitosamente','Se ha modificado la comisión ' + this.user.first_name + ' de manera exitosa.')
                    this.router.navigate(['/pages/administration/users']);
                }
                else {
                    console.log(data.error)
                    this.showToast('danger','Hubo un error al modificar el usuario',data.error.error)
                    console.log(data.error.error)
                    this.router.navigate(['/pages/administration/users']);
                }
            });
        }
    }
  }

  private showToast(type: NbComponentStatus, title: string, body: string){
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.index += 1;
    this.toastrService.show(
      body,
      title,
      config);
  }

}