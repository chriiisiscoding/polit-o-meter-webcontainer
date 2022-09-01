import { Injectable } from '@angular/core';
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";

@Injectable()
export class ChartService {

  constructor() { }

  private lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  private lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: "y-axis-0",
          position: "left"
        },
        {
          id: "y-axis-1",
          position: "right",
          gridLines: {
            color: "whitesmoke"
          },
          ticks: {
            fontColor: "gray"
          }
        }
      ]
    }
  };
  private lineChartColors: Color[] = [
    {
      // blue
      borderColor: "#2196f3d4"
    },
    {
      // red
      borderColor: "red"
    }
  ];
  private lineChartLegend = true;
  private lineChartType = "line";

  public getChartSettings():any{
    let settings:any = {};
    settings.showLegend = this.lineChartLegend;
    settings.chartType = this.lineChartType;
    settings.chartOptions = this.lineChartOptions;
    settings.chartLabels = this.lineChartLabels;   
    settings.chartColors = this.lineChartColors;
    return settings;
  }
}