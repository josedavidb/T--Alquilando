import { Component } from '@angular/core';

//Components
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import {Router, NavigationExtras } from'@angular/router';

import { UsersService } from './users.service';
import { UsersModel } from './users.model';
import { Observable } from 'rxjs';
import { User } from '../../../@core/data/users';
@Component({
    selector: 'ngx-smart-table',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
  })
export class UsersComponent {

  //Settings for Smart Table
  settings = {
    actions: {columnTitle: 'Acciones',},
    mode:'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '100px'
      },
      email:{
        title: 'Correo electrónico',
        type: 'string',
      },
      first_name: {
        title: 'Nombre',
        type: 'string',
      },
      last_name: {
        title: 'Apellido',
        type: 'string',
      },
      
    },
  };

  source: LocalDataSource = new LocalDataSource();
  usersList:UsersModel[];
  tempUsersList:UsersModel[];
  total_pages:number;
  user:UsersModel;

  //Variable to difference between create mode and edit mode
  edit:boolean;

  constructor(public usersService:UsersService, public router:Router){
    this.usersList = [];
    this.loadAllUsers();
  }

  loadUsersForPage(page):Observable<any>{
    let observable:Observable<any>;
    observable = Observable.create((obs)=>{
      this.usersService.getUsersList(page).subscribe(data=>{
        if (data){
          if (!data.error){
              this.tempUsersList = data.data;
              this.usersList = this.usersList.concat(this.tempUsersList);
              console.log(this.usersList)
              this.total_pages = data.total_pages;
              obs.next();
                      
          }
      }
    })
    
    })
  return observable;
}

  loadAllUsers(){
    this.loadUsersForPage(1).subscribe(data=>{
      if (this.total_pages){
         for (let i = 2; i<= this.total_pages; i ++){
           this.loadUsersForPage(i).subscribe(data=>{
             this.source.load(this.usersList);
           });
         }
      }
    });
  }

  createUsersForm(){
    this.edit = false;
    this.user = new UsersModel();
    let navigationExtras:NavigationExtras = {
      state:
      {
        user: this.user,
        edit: this.edit,
      } 
    }
    this.router.navigate(['pages/administration/users/form'],navigationExtras);
    
  }

  editUsersForm(event){
    this.edit = true;
    this.user = new UsersModel();
    Object.assign(this.user,event.data) //Instance all fields of user with the event data
    let navigationExtras: NavigationExtras = {
      state: { user : this.user, edit : this.edit  }
    };
    this.user.password = ""
    this.user.confirm_password = ""
    this.router.navigate(['pages/administration/users/form'], navigationExtras);
  }
}