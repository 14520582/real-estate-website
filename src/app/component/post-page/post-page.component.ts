import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  realEstateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.realEstateForm = this.formBuilder.group({
      form: [0, Validators.required],
      type: [0, Validators.required],
      ward: ['all', Validators.required],
      price: [0, Validators.required],
      area: [0, Validators.required],
      floor: ['all', Validators.required],
      direction: ['all', Validators.required],
      numberOfBedRoom: ['', Validators.required],
      numberOfBathRoom: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
}
