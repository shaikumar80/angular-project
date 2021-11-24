import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style: italic;
  }
`]
})
export class BindingComponent implements OnInit {

  pageTtitle: string = "Data binding in angular string";
  imageUrl: string = "assets/images/angular.png";
  btnState: boolean = false;
  hasError: boolean = true;
  highlightColor: string = "orange";
  titleStyles: object = {
    color: "blue",
    fontStyle: "italic"
  };
  change:any;
  successClass: string="text-success";
  isSpecial: boolean = true;
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  check:any;

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(){
    this.pageTtitle = "Data binding using event data binding";
  }

}
