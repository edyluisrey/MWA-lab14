import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
    textarea.ng-invalid {
      border: 1px solid red;
    }
    .alert-danger{
    	color:red;
    }
  `]
})
export class UserComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { 
   	this.myForm = formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [
          Validators.required, Validators.email]],
      'post': ['',[Validators.required, Validators.minLength(10)]] 
    });

  }
  
  onSubmit() {
    console.log(this.myForm);
  }

  ngOnInit() {
  }

  getData(value){    
		this.userService.getUser().subscribe(data=>{
		  this.myForm.controls['name'].setValue(data.json().name);
		  this.myForm.controls['email'].setValue(data.json().email);
		 
		});

		this.userService.getPost().subscribe(data=>{
		  this.myForm.controls['post'].setValue(data.json()[0].body);
		});
  }

}
