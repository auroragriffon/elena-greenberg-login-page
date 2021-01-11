import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {
  
  public formData;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formData = this.route.snapshot.queryParams;
    console.log(this.route.snapshot.queryParams);
  }

}
