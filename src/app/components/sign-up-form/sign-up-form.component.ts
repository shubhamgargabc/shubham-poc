import { Component, OnInit } from '@angular/core';

interface IChild {
  name: string,
  age: number
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  public childrens: Array<IChild> = [{
    name: '',
    age: null
  }];
  public name: string;
  public gender: string;
  public birthDate: string;
  public monthlyExpense: number;
  public currentSavings: number;
  public invenstments: number;
  
  constructor() { }

  ngOnInit() {
  }

  public addChild():void {
    this.childrens.push({
      name: '',
      age: null
    });
  }
  public goToPlans(): void {
    alert('To Financial Planning Page');
  }
}
