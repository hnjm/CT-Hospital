export class RegisterUserModel {
    UserName ?: string ;
    Password ?: string ;
    FirstName ?: string ;
    LastName ?: string ;
    Email ?: string ;
}



// createContacts(contact) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     this.http.post('http://localhost:8080/contacts', contact, {headers : headers})
//       .subscribe(res => {
//          console.log('inside postmehtod of sub.function', res.json());//only objects
//       })
//   }