import { Component, OnInit } from '@angular/core';

import { EnvoieService } from 'src/app/services/envoie.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  envoieData = {};

  constructor(private trans: EnvoieService) { }

  ngOnInit() {
  }

  // envoyer(){
  //   this.envoi.envoyer(this.envoyerE)
  //     .subscribe(
  //       res => {
  //         console.log(res)
  //         localStorage.setItem('access_token', res.jwt)
  //         this.router.navigate(['/special'])
  //       },
  //       err => console.log(err)
  //     )
  // }

  envoie(){
    this.trans.envoie(this.envoieData)
    .subscribe(
      data => {
        window.confirm('Envoie reussie');
        console.log(data);
      },
      err=> {
        window.confirm('Envoie echoué');
      }
    );
  }
  
}
