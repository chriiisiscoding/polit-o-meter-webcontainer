import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets } from "chart.js";
import {  BaseChartDirective } from "ng2-charts";

import { AggregatorService } from "../../services/aggregator.service";
import { ChartService } from "../../services/chart.service";

@Component({
  selector: "visualization",
  templateUrl: "./visualization.component.html",
  styleUrls: ["./visualization.component.css"]
})
export class VisualizationComponent {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "GOP" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Dems" }
  ];


  private settings:any = {};

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private chartService:ChartService, private aggregatorService:AggregatorService) {
    this.settings = chartService.getChartSettings();
  }
}
