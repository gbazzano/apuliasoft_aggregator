import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AggregatorHomeComponent } from './components/aggregator-home/aggregator-home.component';
import { AggregatorWorkedHoursComponent } from './components/aggregator-worked-hours/aggregator-worked-hours.component';
import { AggregationTableColPipe } from './pipes/aggregation-table-col.pipe';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { SpinnerOverlayComponent } from './shared/components/spinner-overlay/spinner-overlay.component';
import { SpinnerInterceptor } from './shared/Interceptors/spinner.interceptor';

const routes: Routes = [
  { path: '', component: AggregatorHomeComponent },
  { path: 'workedhours', component: AggregatorWorkedHoursComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AggregatorHomeComponent,
    AggregatorWorkedHoursComponent,
    AggregationTableColPipe,
    SpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    //NoopAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTableModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
