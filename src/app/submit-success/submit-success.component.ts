import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.css']
})
export class SubmitSuccessComponent {
  constructor( private router : Router){}
  landingPage(){
    this.router.navigate([''])
  }
}
