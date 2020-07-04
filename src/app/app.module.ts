import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule, MatStepperIntl } from '@angular/material/stepper';
// import { MyIntl } from '@angular/material/';
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
import { Inscription } from './models/inscription.model';
import { AdministrationComponent } from './administration/administration.component';

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
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatStepperModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [InscriptionService,
    {provide: MatStepperIntl}],
    // , useClass: MyIntl
  bootstrap: [AppComponent]
})
export class AppModule { }
