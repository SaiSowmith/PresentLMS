import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  response: any;
  results: any = {};
  results2: any = [];
  results3: any = {};
  results4: any = {};
  id: any;
  statusMessage: string;
  email: any;
  EmpId: any;

  constructor(
    private http: HttpClient) {
  }


  getEmployee(email, password) {
    return this.http.get(`https://fir-demo-e52b2.firebaseio.com/Employee.json?orderBy="EMail"&equalTo="${email}"`)
    /* .subscribe(
       response => {
         if (response == null) {
           this.statusMessage = "Details with given details not found";
         }
         else {
           Object.keys(response).forEach(key => {
             this.results = response[key];
             
             console.log(this.results);
           });
         }
       }),
     err => {
       alert("ERROR!!! \n Check the Console")
       console.log("Error occured", err);
     }*/
  }

  postEmployee() {
    const req = this.http.post(`https://fir-demo-e52b2.firebaseio.com/Employee.json`, {

      EMail: prompt("Enter EMail"),
      EmpDOJ: prompt("Enter EmpDOJ"),
      EmpId: prompt("Enter ID"),
      EmpName: prompt('Enter name'),
      Password: prompt("Enter Password"),


    })
      .subscribe(
        res => {
          this.results4 = res;
          alert("Details have been Added Successfully!")
          console.log("POST", res);
        },
        err => {
          alert("Error Occured! \n Check the Console")
          console.log("ERROR!!!", err);
        }
      );
  }

  getLeave(EmpId) {

    return this.http.get(`https://fir-demo-e52b2.firebaseio.com/LMS.json?orderBy="EmpId"&equalTo="${EmpId}"`)
     
  }

  postLeave() {
    const req = this.http.post(`https://fir-demo-e52b2.firebaseio.com/LMS.json`, {

      EmpId: prompt("Enter ID"),
      EmpName: prompt('Enter name'),
      StartDate: prompt("Enter Start of Leave"),
      EndDate: prompt("Enter End of Leave"),
      NoOfDays: prompt("Enter No of days"),
      LeaveType: prompt("Enter Leave Type"),
      ReasonForLeave: prompt("Enter reason")

    })
      .subscribe(
        res => {
          this.results2 = res;
          alert("Details have been Added Successfully!")
          console.log("POST", res);
        },
        err => {
          alert("Error Occured! \n Check the Console")
          console.log("ERROR!!!", err);
        }
      );
  }
  updateLeaves(key,statusUpdateObj){
   // " https://fir-demo-e52b2.firebaseio.com/LMS/this.results3[data]/.json",statusUpdate
    const req = this.http.patch('https://fir-demo-e52b2.firebaseio.com/LMS/'+key+'/.json', statusUpdateObj)
      .subscribe(
        res => {
          this.results2 = res;
          console.log("UPDATE", res);
          alert("Details have been updated Successfully! ")
        },
        err => {
          alert("Error Occured!!! \n Check the Console");
          console.log("ERROR!!!!", err);
        }
      );
  }


  rejectLeaves(key,statusUpdateObj){
    console.log(" status update for reject - "+statusUpdateObj);
    // " https://fir-demo-e52b2.firebaseio.com/LMS/this.results3[data]/.json",statusUpdate
    return this.http.patch('https://fir-demo-e52b2.firebaseio.com/LMS/'+key+'/.json', statusUpdateObj).map((res: Response) => {
        return res;
     });
   
   
    /* const req = this.http.patch('https://fir-demo-e52b2.firebaseio.com/LMS/'+key+'/.json', statusUpdateObj)
       .subscribe(
         res => {
           this.results2 = res;
           console.log("UPDATE", res);
           alert("Details have been updated Successfully! ")
         },
         err => {
           alert("Error Occured!!! \n Check the Console");
           console.log("ERROR!!!!", err);
         }
       );*/
   }



   getLBS(EmpId) {

    return this.http.get(`https://fir-demo-e52b2.firebaseio.com/LBS.json?orderBy="EmpId"&equalTo="${EmpId}"`)
     
  }
   postLBS() {
    const req = this.http.post(`https://fir-demo-e52b2.firebaseio.com/LBS.json`, {

       EmpId: prompt("Enter ID"),
       EmpDOJ: prompt('Enter DOJ'),
       EL: prompt('Enter Earned Leaves'),
       CL: prompt('Enter CL'),

  
    })
      .subscribe(
        res => {
          this.results2 = res;
          alert("Details have been Added Successfully!")
          console.log("POST LBS", res);
        },
        err => {
          alert("Error Occured! \n Check the Console")
          console.log("ERROR!!!", err);
        }
      );
  }

  updateLBS(selectedEmpId,statusUpdateObj){
    return this.http.patch('https://fir-demo-e52b2.firebaseio.com/LBS/'+selectedEmpId+'/.json', statusUpdateObj).map((res: Response) => {
        return res;
     });
   
//'https://fir-demo-e52b2.firebaseio.com/LMS/'+key+'/.json', statusUpdateObj
   //     this.http.patch(`https://fir-demo-e52b2.firebaseio.com/LBS.json?orderBy="EmpId"&equalTo="${selectedEmpId}"`)
//https://fir-demo-e52b2.firebaseio.com/LMS/'+key+'/.json', statusUpdateObj
  //  const req = this.http.patch(`https://fir-demo-e52b2.firebaseio.com/LBS/'+selectedEmpId+'/.json`, statusUpdateObj)
  //      .subscribe(
  //        res => {
  //          this.results2 = res;
  //          console.log("UPDATE", res);
  //          alert("Details have been updated Successfully! ")
  //        },
  //        err => {
  //          alert("Error Occured!!! \n Check the Console");
  //          console.log("ERROR!!!!", err);
  //        }
  //      );
   }
  update() {
    const req = this.http.put('https://fir-demo-e52b2.firebaseio.com/LBS', {

      name: prompt('Enter name'),
      username: prompt("Enter Username"),
      email: prompt("Enter Email"),
      address: {
        street: prompt("Enter Street")
      },
      company: {
        name: prompt("Enter Company Name")
      }
    })
      .subscribe(
        res => {
          this.results2 = res;
          console.log("UPDATE", res);
          alert("Details have been updated Successfully! ")
        },
        err => {
          alert("Error Occured!!! \n Check the Console");
          console.log("ERROR!!!!", err);
        }
      );
  }

  delete() {
    this.http.delete('http://localhost:3000/details/' + this.id)
      .subscribe(
        response => {
          this.results = response;
          alert(`Details of ID=${this.id} have been deleted!!!!!!!!!`)
          console.log("DELETE:", this.results);
        })
  }
  getLeave2(RMID){
    return this.http.get(`https://fir-demo-e52b2.firebaseio.com/LMS.json?orderBy="RMID"&equalTo="${RMID}"`)

  }
  updateEmployee(selectedEmpId,statusUpdateObj){
    return this.http.patch('https://fir-demo-e52b2.firebaseio.com/Employee/'+selectedEmpId+'/.json', statusUpdateObj).map((res: Response) => {
        return res;
     });
    }
}