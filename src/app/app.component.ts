import { Component, ViewChild } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginApp';
//   @ViewChild('allusers', { static: true }) allusers: UsersComponent ;
// LoginForm:any = FormGroup;
// submitted = false;
//   userenabled: boolean = false;
// constructor( private formBuilder: FormBuilder){}
// ngOnInit() {
//   //Add User form validations
//   this.LoginForm = this.formBuilder.group({
//   name: ['', [Validators.required]],
//   password: ['', [Validators.required]]
//   });
  
// }
// populateName(){
//   // this.LoginForm.name = "John Doe";
//   // console.log(this.LoginForm);
//   this.LoginForm.patchValue({
//     name: "John Doe",
//     password:"1234"
//  })

// }
// get f() { return this.LoginForm.controls; }
// onSubmit() {
  
//   this.submitted = true;
//   // return form is invalid
//   if (this.LoginForm.invalid) {
//       return;
//   }
//    //True if all the fields are filled
//    if(this.submitted)
//    {
//     this.userenabled = true;
    
//      console.log(this.LoginForm)
//    }
 
// }
ngOnInit() {}
constructor( private formBuilder: FormBuilder){}

}
