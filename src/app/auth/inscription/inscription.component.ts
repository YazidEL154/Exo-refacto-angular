import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import Validation from '../../validator/validation';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = new FormGroup({
      nom: new FormControl(""),
      prenom: new FormControl(""),
      email: new FormControl("", Validators.email),
      pass: new FormControl("",Validators.min(5)),
      pass_confirm: new FormControl("",Validators.min(5)),
    },
    {
      validators: [Validation.match('pass', 'pass_confirm'), Validators.required]
    })
  }

  ngOnInit(): void {
  }

  inscription(): void {
    console.log(this.inscriptionForm);
  }

}
