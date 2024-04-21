import { Component } from '@angular/core';
import { User } from "../../models/user.model";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  newUser: User = {
    contact:"",
    firstname:"",
    lastname: "",
    password:"",
  }

  onSubmit(): void {
    console.log(this.newUser);
  }
}
