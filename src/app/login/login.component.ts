import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'loginApp';
 
  @ViewChild("UsersCompRef", { read: ViewContainerRef }) users: ViewContainerRef;
LoginForm:any = FormGroup;
submitted = false;
  userenabled: boolean = false;
constructor( private formBuilder: FormBuilder,private componentRef: ComponentFactoryResolver,){}
ngOnInit() {
  //Add User form validations
  this.LoginForm = this.formBuilder.group({
  name: ['', [Validators.required]],
  password: ['', [Validators.required]]
  });
  
}
populateName(){
 
  this.LoginForm.patchValue({
    name: "John Doe",
    password:"1234"
 })

}
get f() { return this.LoginForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // return form is invalid
  if (this.LoginForm.invalid) {
      return;
  }
   // if all the fields are filled
   if(this.submitted)
   {
    this.userenabled = true;
    this.users.clear();

    const usercomp = this.componentRef.resolveComponentFactory(
      UsersComponent
    );
    const componentRef = this.users.createComponent(
      usercomp
    );
    componentRef.instance.setData();
     console.log(this.LoginForm)
   }
 
}
}
