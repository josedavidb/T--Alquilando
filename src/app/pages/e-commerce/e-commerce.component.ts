import { Component } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'


@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {

  constructor(public router:Router){

  }
  goToUsers(){
    console.log('Aja');
    this.router.navigate(['/pages/administration/users']);
  }

}
