import { Component, OnDestroy, OnInit } from '@angular/core';
import { Inscription } from '../models/inscription.model';
import { Subscription } from 'rxjs/Subscription';
import { InscriptionService } from '../services/inscription.service';


@Component({
  selector: 'app-inscription-liste',
  templateUrl: './inscription-liste.component.html',
  styleUrls: ['./inscription-liste.component.scss']
})
export class InscriptionListeComponent implements OnInit {


  inscriptions: Inscription[];

  inscriptionSubscription: Subscription;

  constructor(private inscriptionService: InscriptionService) { }

  ngOnInit(): void {
    this.inscriptionService.getObjects();
    this.inscriptionSubscription = this.inscriptionService.inscriptionSubject.subscribe(
      (inscriptions: Inscription[]) => {
        if(inscriptions){ this.inscriptions = inscriptions;
        console.log(inscriptions);}
        else{
        }
      }
    );
    this.inscriptionService.emitInscriptions();
  }
  ngOnDestroy(){
    this.inscriptionSubscription.unsubscribe();
  }

}
