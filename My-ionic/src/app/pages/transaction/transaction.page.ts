import { Component, OnInit } from '@angular/core';
import { EnvoieService } from 'src/app/services/envoie.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  envoieData:any = {};
  retraitData= {};
  values = {};
  Data: any={};


  constructor(private trans: EnvoieService) { }

  ngOnInit() {
  }

  envoie(){
    this.trans.envoie(this.envoieData)
    .subscribe(
      data => {
        window.confirm('Envoie echoué');
        console.log(data);
      },
      err=> {
        window.confirm('Envoie reussie');
      }
    );
  }

  retrait(){
    this.trans.retrait(this.retraitData)
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

  onKey(){
    //console.log(this.envoieData.montant);
    this.trans.frais(this.envoieData.montant)
    .subscribe(
      res => {
        
        console.log(res);
        this.values=res;
      },
      err=> {
        console.log(err);

      }
    );
  }
  
}
