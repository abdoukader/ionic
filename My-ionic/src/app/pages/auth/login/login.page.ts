import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService, private _router: Router,private alertController:AlertController ) { }

  ngOnInit() {
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Envoie',
      subHeader: 'KIMORA TRANSFERT',
      message: 'Envoie non effectué',
      buttons: ['OK']
    });

    await alert.present();
  }

onLogin(data) {
    this._auth.loginUser(data)
    .subscribe(
      res => {
        this.presentAlertError();
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
