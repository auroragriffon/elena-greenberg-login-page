import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.router.navigate(['./loggedin'], { queryParams: { myQueryParam: 'form value' } })
  }

}
