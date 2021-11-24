import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from './shared.service'
import { AlertService } from 'ngx-alerts';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm: any;
  userData: Array<any> = [];
  spin: boolean = false;
  userId: any;
  optionsList: Array<any> = [
    {
      id: 1,
      name: "umar"
    },
    {
      id: 2,
      name: "sallu"
    },
    {
      id: 3,
      name: "aman"
    }
  ]

  constructor(private fb: FormBuilder, private shared: SharedService, private alertService: AlertService) {
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      options: ['', Validators.required]
    });
    this.getDetails();

  }

  send(formData: any) {
    // this.spin = true;
    this.shared.senduserDetails(formData).subscribe((data) => {
      console.log(data)
      // this, this.spin = false;
      // this.alertService.success('Data sent successfully');
      // this.getDetails();
    });
  }

  ngOnInit() {

  }

  deleteRecord(index: any) {
    this.shared.deleteUserData(index).subscribe((userdata) => {
      alert("deleted successfully");
      this.getDetails();
    })
  }

  updateRecord(user:any, id:any){
    this.userId = id;
    this.userForm.patchValue({
      title:user.title,
      author:user.author
    });
  }

  update(data:any){
    var id = this.userId;
    this.shared.updateUserData(data,id).subscribe((userdata) => {
      alert("updated successfully");
      this.getDetails();
    })
  }

  getDetails() {
    this.shared.getuserDetails().subscribe((userdata) => {
      this.userData = userdata;
    })
  }
}
