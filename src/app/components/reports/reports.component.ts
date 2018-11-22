import { DialogOverviewExampleDialog3 } from './../initial-login/initial-login.component';
import { LeaveServiceService } from './../../services/leave-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Reports } from './../../models/reports'
import { Router } from '@angular/router';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  formGroup: FormGroup;

  result: any=[];
  fResult: any=[];
  reports = new Reports();
  send: { "fromDate": Date; "toDate": Date; };
  post: any;
  result1: any=[];
  result2: any=[];
  finalLeaves: any;

  constructor(
    private leaveService:LeaveServiceService,
    private formBuilder: FormBuilder,
    private router:Router

  ) { }

  createForm() {
    this.formGroup = new FormGroup({
      fromDate: new FormControl()
   });
    this.formGroup = this.formBuilder.group({
      
      'fromDate': [null, Validators.required],
      'toDate': [null, Validators.required],
      'validate': ''
    });
  }

  onSubmit(post) {
  
    this.post = post;

    console.log("Leave Submit", this.reports);
    this.send = {
      "fromDate": this.reports.fromDate,
      "toDate": this.reports.toDate

      // RMID: localStorage.getItem("RMID"),
      // "LeaveType":this.leave.leaveType,
      // "ReasonForLeave": this.leave.reason,
      // "TotalDays": this.leave.totalLeaves,
      // "EmpName": localStorage.getItem("EmpName"),
      // EmpId: localStorage.getItem("EmpId")
    }
    this.result1=[];
    this.result2=[];
    

    this.leaveService.getReport(this.reports.fromDate,this.reports.toDate)
  
    // .subscribe((data: any) => {
    //   if ( data.success === true) {
    //   this.router.navigate(['main/leaves']);
    //   }
    // },
    //);
    .subscribe(
      response => {

          Object.keys(response).forEach(key => {
            //this.result = response;
         this.result1.push(response[key]);
          });
          console.log("REPORTS result ",this.result1);



         /* const names = [{  _id: 1 }, { _id: 1}, { _id: 2}, { _id: 1}]
      const result = [this.result1.reduce( (mp, o) => {
          console.log("irt==== ",o.EmpId+"  leaves  "+o.TotalDays);

          if (!mp.has(o.EmpId)) {
           // console.log("data is not in map -- ",o.EmpId+ " days == ", o.TotalDays);
              mp.set(o.EmpId, Object.assign({ count: o.TotalDays }, o));
            }else{
            //  console.log("object in Map  ",o.EmpId+"  coount== ",mp.get(o.EmpId).count);
            mp.get(o.EmpId).count= mp.get(o.EmpId).count+o.TotalDays;
            }
            return mp;
        }, new Map).values()];
        console.log("REPORTSData after ",result);

        for(let key of this.result.keys) {
          console.log("key == ");
        }*/

        const list = {};
        this.result1.forEach( (emp, index) => {
          if(emp.Status=="Approved"){
 
          if (!list[emp.EmpId]) {
                list[emp.EmpId] = {
                    'EmpId' : emp.EmpId,
                    'EmpName':emp.EmpName,
                    'TotalDays' : emp.TotalDays
                };
        } else {
                list[emp.EmpId].TotalDays += emp.TotalDays;
        }
      }
        });
        
       const listOfEmp = [];
       this.result2=[];
       this.result1=[];
        // tslint:disable-next-line:forin
        for ( const i in list) {
          this.result2.push(list[i]);
        }
      
        console.log(this.result2);




          

       //   console.log("REPORTS result EmpId",this.result[3].EmpId);

      }),

    err => {
      alert("ERROR!!! \n Check the Console")
      console.log("Error occured", err);
    }


  }

  ngOnInit() {

  // this.result1=res;
  // console.log("reports calculateTotalLeaves",this.result1);

 



    this.createForm();
  }

//   calculateTotalLeaves(){
//     if(this.result[3].EmpId==this.result2[0].EmpId){

//       if(this.result1[0].Status=='Approved'){
// this.finalLeaves=this.result[3].TotalDays
// alert("finalLeaves="+this.finalLeaves)
//       }
//     }
 
//   }

  

}
