import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatStepperModule, MatStepperIntl } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionService } from './services/inscription.service'
import { InscriptionListeComponent } from './inscription-liste/inscription-liste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdministrationComponent } from './administration/administration.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { DossiersAFournirComponent } from './dossiers-a-fournir/dossiers-a-fournir.component';
import { ApeComponent } from './ape/ape.component';
import { ElementaireComponent } from './elementaire/elementaire.component';
import { PrescolaireComponent } from './prescolaire/prescolaire.component';
import { OptionComponent } from './option/option.component';
import { AfterInscriptionComponent } from './after-inscription/after-inscription.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes : Routes =[ // all routes
  {
    path:'accueil', component:  AccueilComponent
  },
  {
    path:'inscription', component:  InscriptionComponent
  },
  {
    path:'inscription-liste', component:  InscriptionListeComponent
  },
  {
    path:'ape', component:  ApeComponent
  },
  {
    path:'tarifs', component:  TarifsComponent
  },
  {
    path:'option', component:  OptionComponent
  },
  {
    path:'contact', component:  ContactComponent
  },
  {
    path:'ai', component:  AfterInscriptionComponent
  },
  {
    path:'pyradmin', component:  AdministrationComponent
  },
  {
    path:'dossiers-a-fournir', component:  DossiersAFournirComponent
  },
  // {
  //   path:'a', component:  AdministrationComponent
  // },
  // Never forget these one bellow
{
    path: '', component: AccueilComponent
  },
  {
   path: 'not-found', component: NotFoundComponent
 },
 {
   path: '**', redirectTo:'/not-found'}]


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    InscriptionListeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AdministrationComponent,
    TarifsComponent,
    DossiersAFournirComponent,
    ApeComponent,
    ElementaireComponent,
    PrescolaireComponent,
    OptionComponent,
    AfterInscriptionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatStepperModule,
    MatTableModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [InscriptionService,
    {provide: MatStepperIntl}],
    // , useClass: MyIntl
  bootstrap: [AppComponent]
})
export class AppModule { }
