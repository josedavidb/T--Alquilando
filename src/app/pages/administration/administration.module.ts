import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AdministrationRoutingModule, routedComponents } from './administration-routing.module';

import {
  NbCardModule,
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbDialogModule,
  NbSpinnerModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';


//Services
import { NbDialogService} from '@nebular/theme';
import { UsersService } from './users/users.service';

//Models 
import { UsersModel } from './users/users.model';


@NgModule({
  imports: [
      AdministrationRoutingModule,
      NbCardModule,
      Ng2SmartTableModule,
      NbActionsModule,
      NbButtonModule,
      NbCheckboxModule,
      NbDatepickerModule, NbIconModule,
      NbInputModule,
      NbRadioModule,
      NbSelectModule,
      NbDialogModule,
      FormsModule,
      CommonModule,
      NbSpinnerModule,
      NbDialogModule,
      MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,

  ],
  
  providers: [
    UsersService,
    UsersModel,
  ],
})
export class AdministrationModule { }
