import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnvoieService  {

  constructor(private http: HttpClient) { }
  
  private endpoint = 'http://127.0.0.1:8000/api/envoie';

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
  
}
