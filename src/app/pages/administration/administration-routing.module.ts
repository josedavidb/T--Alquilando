import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component
import {AdministrationComponent} from '../administration/administration.component';
import {UsersComponent} from './users/users.component';
import {UsersFormComponent} from './users-form/users-form.component';

const routes: Routes = [{
  path: '',
  component: AdministrationComponent,
  children: [
    {
      path: 'users',
      component: UsersComponent,
    },
    {
      path: 'users/form',
      component: UsersFormComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule { }

export const routedComponents = [
    AdministrationComponent,
    UsersComponent,
    UsersFormComponent
];
