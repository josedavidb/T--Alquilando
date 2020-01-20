import { Injectable } from '@angular/core';
import {BaseService} from '../../../app.base.service';
import { Observable } from 'rxjs';

//Model
import {UsersModel} from './users.model';

@Injectable()
export class UsersService extends BaseService{

    getUsersList(page):Observable<any>{
        
        return this.getBase(`users/?page=${page}`)
    }

    createUser(user:UsersModel){
        return this.postBase(user,'users/');
    }

    updateUser(user:UsersModel){
        return this.putBase(user,`users/${user.id}/`);
    }

    deleteUser(user:UsersModel){
        console.log(user.id);
        return this.deleteBase(user,`users/${user.id}/`);
    }

}