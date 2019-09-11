import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineChartComponent } from './graphs/line-chart/line-chart.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { RealtimeTableComponent } from './tables/realtime-table/realtime-table.component';
import { RealtimeItemComponent } from './tables/realtime-item/realtime-item.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    HighchartsChartComponent,
    RealtimeTableComponent,
    RealtimeItemComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
