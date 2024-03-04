import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
  })
  export class ProjectComponent implements OnInit {
    projectForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.projectForm = this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        date: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    submitForm() {
      if (this.projectForm.valid) {
        console.log('Form submitted:', this.projectForm.value);
        
      }
    }
  }