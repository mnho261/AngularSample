import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetRefundsComponent } from './refunds/get-refunds.component';
import { AddRefundComponent } from './refunds/add-refund.component';
import { RefundService } from './refunds/refund.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

const appRoutes: Routes = [
  { path: 'get', component: GetRefundsComponent },
  { path: 'add', component: AddRefundComponent },
  { path: '', redirectTo: '/get', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    GetRefundsComponent,
    AddRefundComponent
  ],
  imports: [
    TableModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RefundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
