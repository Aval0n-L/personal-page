import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')!.value);
    formData.append('email', this.contactForm.get('email')!.value);
    formData.append('subject', this.contactForm.get('subject')!.value);
    formData.append('message', this.contactForm.get('message')!.value);

    this.http.post('/send-email', formData).subscribe(response => {
      alert('Success');
    }, error => {
      console.error(error);
      alert('Something went wrong. Please try again');
    });
  }
}