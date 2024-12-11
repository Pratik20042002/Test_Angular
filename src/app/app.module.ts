import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryViewsComponent } from 'src/components/summary-views/summary-views.component';
import { DetailedViewsComponent } from 'src/components/detailed-views/detailed-views.component';
import { TabsComponent } from 'src/components/tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SummaryViewsComponent,
    DetailedViewsComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SummaryViewsComponent,
    DetailedViewsComponent,
    TabsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
