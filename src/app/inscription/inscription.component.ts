import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { Router } from '@angular/router';
import { Inscription } from '../models/inscription.model';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private inscriptionService: InscriptionService,
              private router: Router) {}

  // To initialize the form
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.inscriptionForm = this.formBuilder.group({
      fatherName:'',
      fatherProfession:'',
      fatherPhoneNumber:'',
      motherName:'',
      motherProfession:'',
      motherPhoneNumber:'',
      tutorName:'',
      tutorProfession:'',
      tutorPhoneNumber:'',
      kidFirstName:['', Validators.required],
      kidLastName:['', Validators.required],
      kidGrade:['', Validators.required],
      kidBirthDate:['', Validators.required],
      kidBirthPlace:['', Validators.required],
      lastSchool:'',
      transfertReason:'',
      living:''
    });
  }
  onSubmitForm() {
    const formValue = this.inscriptionForm.value;
    const newInscription = new Inscription(
      formValue['fatherName'],
      formValue['fatherProfession'],
      formValue['fatherPhoneNumber'],
      formValue['motherName'],
      formValue['motherProfession'],
      formValue['motherPhoneNumber'],
      formValue['tutorName'],
      formValue['tutorProfession'],
      formValue['tutorPhoneNumber'],
      formValue['kidFirstName'],
      formValue['kidLastName'],
      formValue['kidGrade'],
      formValue['kidBirthDate'],
      formValue['kidBirthPlace'],
      formValue['lastSchool'],
      formValue['transfertReason'],
      formValue['living']
    );
    this.inscriptionService.addInscription(newInscription);
    this.router.navigate(['/ai']);
  }

}



