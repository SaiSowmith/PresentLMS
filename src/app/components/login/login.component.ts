import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  employeeDetails: any;

  constructor(
    private loginService: LoginServiceService,
    private router: Router) { }

  login() {
    console.log("before password = "+this.user.password);
    //CryptoJS.MD5("myData");
    const md5 = new Md5();
    var inputPassword=md5.appendStr(this.user.password).end();
    console.log("pass== "+inputPassword);
    //var encripPwd= CryptoJS.AES.encrypt(this.user.password);
   // console.log("encript == ",encripPwd);
//console.log("md5= ",);

    //var temp = CryptoJS.MD5(this.user.password);
    //console.log("after password encir== "+temp);
    //var key = CryptoJS.enc.Utf8.parse('7061737323313233');
//var iv = CryptoJS.enc.Utf8.parse('7061737323313233');


    this.loginService.getEmployee(this.user.email, this.user.password)
      .subscribe((data: any) => {
        console.log("Employee", Object.keys(data).length);
        
        if( Object.keys(data).length>0){
        console.log("Employee", data);
        console.log("before");
        Object.keys(data).forEach(key => {
          this.employeeDetails = data[key];
          console.log("from UI= "+this.user.password+ " from db== ", this.employeeDetails.Password)
          if(this.user.password===this.employeeDetails.Password){

         // if(this.employeeDetails.password===inputPassword){
          localStorage.setItem("EmpId", this.employeeDetails.EmpId);
          localStorage.setItem("EmpName", this.employeeDetails.EmpName);
          localStorage.setItem("EMail", this.employeeDetails.EMail);
          localStorage.setItem("EmpDOJ", this.employeeDetails.EmpDOJ);
          localStorage.setItem("RMName",this.employeeDetails.RMName);
          localStorage.setItem("RMEmail",this.employeeDetails.RMEmail);
          localStorage.setItem("DocumentId",key);
          localStorage.setItem("IsActivate",this.employeeDetails.IsActivate);
          
          
          let active=localStorage.getItem("IsActivate");
          if(active=='N'){
            this.router.navigate(['/initial-login']);
          //  this.router.navigate(['/main/home']);

          }else{
            this.router.navigate(['/main/dashboard']);
          }
        }else{
          console.log("come to else ");
          alert("Invalid password");
        }
          //this.router.navigate(['/main']);
         // }else{
          //  alert("invalid password ");
          //}

          console.log("After Set in Local Storage EMPID:" + localStorage.getItem("EmpId"));
        });
        
      }else{

        alert("Invalid user name  ");

      }
      });
  }

  ngOnInit() {
    //this.loginService.postEmployee();
  }

}