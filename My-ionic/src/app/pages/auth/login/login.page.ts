import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

onLogin(data) {
    this._auth.loginUser(data)
    .subscribe(
      res => {
      //Swal.fire('Authentification Réussie!!!')
      console.log(data);
         console.log(res);
        // tslint:disable-next-line: prefer-const
      let jwt = (res.token);
        // tslint:disable-next-line: align
        this._auth.saveToken(jwt);
        // une fois que je suis authentifier je suis dan home
      this._router.navigate(['/home']);
      },
      // err => console.log(err)
    );
  }

  isAdmin() {
    return this._auth.isAdmin();
  }

  isCaissier() {
    return this._auth.isCaissier();
  }

  isSuperAdmin() {
    return this._auth.isSuperAdmin();
  }

  isUser() {
    return this._auth.isUser();
  }

}
