import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
 ticketform: FormGroup;
 submited= false;
  constructor(private fb: FormBuilder) {
    this.ticketform= fb.group({
      fullName: ['',Validators.compose([ Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")   ]),
      
    ],
      phone: ['', Validators.minLength(10)],
      payment: fb.group({
        cardNo:['', Validators.required],
        amount:['', Validators.required],
      }),
    });
   }

  ngOnInit() {
  }
 onSubmit(){
   if(this.ticketform.valid){
   console.log("Data submitted successfully");
   this.ticketform.reset();
   }
 }

 onCancel(){
 this.ticketform.reset();
   console.log("Operation canceled")
 }
}
