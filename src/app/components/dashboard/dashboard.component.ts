import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { ApiRequest } from "src/app/model/api-request";
import { timer } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  objArr = [];
  exchArr = [];
  utilize: any;

  constructor(private cs: DataService) { }

  ngOnInit(): void {
    this.cs.getCryptoExchRate().subscribe((response: ApiRequest) => {
      this.objArr = Object.entries(response);
      console.log('MUM ', this.objArr);
    });
    this.cs.getMassiveExchDump().subscribe((response: any[]) => {
      this.exchArr = response;
      console.log('MM: ', this.exchArr);
    });

    this.startInterval()
  }

  startInterval() {
    timer(2000, 1000).subscribe(res => {
      // console.log(res);
      this.utilize = {
        now: Date.now(),
        rnNumb: Math.random() * (99 - 1) + 1
      }
    })
  }
}


