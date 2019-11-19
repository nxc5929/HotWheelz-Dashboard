import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { LineChartComponent } from './graphs/line-chart/line-chart.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { RealtimeTableComponent } from './tables/realtime-table/realtime-table.component';
import { RealtimeItemComponent } from './tables/realtime-item/realtime-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HeatMapComponent } from './graphs/heat-map/heat-map.component';
import { GaugeComponent } from './graphs/gauge/gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    HighchartsChartComponent,
    RealtimeTableComponent,
    RealtimeItemComponent,
    HeatMapComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
