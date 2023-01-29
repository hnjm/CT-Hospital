import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RegisterUserModel } from '../Model/RegisterUserModel';
import { Observable } from 'rxjs';
import { IUserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL : string = 'https://localhost:7078/api/user';

  constructor(private http : HttpClient) { }

  logUser(username: string, password:string) : Observable<any>{
    let queryparam = new HttpParams().append("username", username).append("password",password);

    var user = this.http.get<any>(this.URL + '/login', {params : queryparam});

    return user;
    //console.log(" = ",this.URL + '/' + queryparam);
    ///console.log(userid, password);
  }

  registerUser(user : RegisterUserModel) : Observable<any>
  {
    let head = new HttpHeaders();
    head.append('Content-Type', 'application/json');
    return this.http.post(this.URL + '/register', user,{headers : head});
  }

  resertPassword(id : number, password : string, reEnteredPassword : string): Observable<any>
  {
    let data = {
      "id" : id,
      "password" : password,
      "reEnternedPassowrd" : reEnteredPassword 
    };

    let head = new HttpHeaders();
    head.append('Content-Type', 'application/json');
    
    console.log(this.URL + '/renewPassword' + id, JSON.stringify(data));
    return this.http.put(this.URL + '/renewPassword', data,{
      headers : head
    });
  }
}
