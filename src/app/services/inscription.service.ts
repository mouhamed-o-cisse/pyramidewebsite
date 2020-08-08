import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscription } from '../models/inscription.model';


@Injectable({
  providedIn: 'root'
})

export class InscriptionService {
  // Fetching data
  private inscriptions: Inscription[] = [];

  inscriptionSubject = new Subject<Inscription[]>();

  constructor(private httpClient: HttpClient){}

  emitInscriptions() {
   this.inscriptionSubject.next(this.inscriptions);
  };

  // DEPLOYMENT the link (NEVER FORGET https:// if the things are on an online server)
  getObjects() {
   return this.httpClient.get('https://pyramidebackend.herokuapp.com/api/inscriptions/get-inscriptions').subscribe(
     (inscriptions: Inscription[]) => {
       console.log(inscriptions);
       if (inscriptions) {
         this.inscriptions = inscriptions;
         this.emitInscriptions();
       }
     },
     (error) => {
       console.log(error);
     }
   );
  }

  addInscription(inscription: Inscription) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('https://pyramidebackend.herokuapp.com/api/inscriptions/add-inscription', inscription).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

}
