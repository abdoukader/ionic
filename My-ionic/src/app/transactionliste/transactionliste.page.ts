import { Component, OnInit } from '@angular/core';
import { EnvoieService } from '../services/envoie.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-transactionliste',
  templateUrl: './transactionliste.page.html',
  styleUrls: ['./transactionliste.page.scss'],
})
export class TransactionlistePage implements OnInit {
  detailTs: any;
  public transactions: FormGroup;
  trans: boolean;


  constructor(private formGroup: FormBuilder, private router :Router ,private authService: EnvoieService ) { }

  ngOnInit() {
  }

  detaitTransaction=this.formGroup.group({
    dateFrom: [''],
    dateTo: ['']
  })
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  transact() {
    this.trans = false;
  }
  commission() {
    this.trans = true;
  }
  

  detailT (data:any){
    console.log(data);
         this.authService.listeTransaction(this.detaitTransaction.value)
        .subscribe(
       data=>{
       console.log(data);
        this.detailTs=data

       }, err=>{
        console.log(err);
       }
     )
   }

    goToView(detail: any){
    this.authService.selectedTrans = detail;
    this.router.navigateByUrl('/detail');   
    } 
  }