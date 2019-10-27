import { Component, OnInit } from '@angular/core';
import { EnvoieService } from '../services/envoie.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detail: any;

  constructor(private trans: EnvoieService) { }

  ngOnInit() {
    console.log(this.trans.selectedTrans);
    this.detail =this.trans.selectedTrans;
  }

}
