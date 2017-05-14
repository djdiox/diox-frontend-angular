import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  public radarChartLabels: string[] = ['HTML', 'C#', 'Javascript', 'Windows','Linux', 'Git', 'PHP', 'CSS'];
  public radarChartData: any = [
    { data: [65, 70, 86, 81, 70, 55, 50, 45], label: 'Skill' }
    // { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public chartType:string = 'doughnut';
  public currentTab:string = 'intro';

  constructor() { }

  ngOnInit() {
  }

  changeChartType () {
    this.chartType = 'pie';
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
