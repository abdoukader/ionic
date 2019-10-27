import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnvoieService  {
  tableau=[];
  selectedTrans: any;

  constructor(private http: HttpClient,private transa :EnvoieService) { }
  
  private endpoint = 'http://127.0.0.1:8000/api/envoie';
  private endpoint4 = 'http://127.0.0.1:8000/api/transac';
  

  envoie(formData) {

    const formData1: FormData = new FormData();

    formData1.append('nomE',formData.nomE);
    formData1.append('prenomE',formData.prenomE);
    formData1.append('telE',formData.telE)
    formData1.append('nomR',formData.nomR);
    formData1.append('prenomR',formData.prenomR);
    formData1.append('telR',formData.telR);
    formData1.append('montant',formData.montant)
    console.log(formData1);
    return this.http.post(this.endpoint, formData1);
  }

  private endpoint1 = 'http://127.0.0.1:8000/api/retrait';

  retrait(formData) {

    const formData2: FormData = new FormData();

    formData2.append('cni',formData.cni);
    formData2.append('code',formData.code)
  
    console.log(formData);
    return this.http.post(this.endpoint1, formData2);
  }

  private endpoint2 = 'http://127.0.0.1:8000/api/tarifs';

  frais(formData) {

    const formData3: FormData = new FormData();

    formData3.append('montant',formData);
    
  
    console.log(formData);
    return this.http.post(this.endpoint2, formData3);
  }
  
  listeTransaction(data) {
    return this.http.post<any>(this.endpoint4 , data);
   }
}
