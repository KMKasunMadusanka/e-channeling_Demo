import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {Routes, RouterModule} from '@angular/router';
import { ChannelingPageComponent } from './channeling-page/channeling-page.component';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
import { ChartsModule } from 'ng2-charts';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { TimeConfirmationComponent } from './time-confirmation/time-confirmation.component';
import { DatePipe } from '@angular/common';
import { LoginServiceService } from './login-service.service';

import {MatToolbarModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatDialogModule,
        MatTabsModule,
        MatTableModule,
        MatRadioModule,
        MatSnackBarModule
} from '@angular/material';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomepageComponent },
  { path: 'channel-home', component: ChannelingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'payment', component: PaymentComponent },
  {path: '**', component: HomepageComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ChannelingPageComponent,
    LoginComponent,
    SettingComponent,
    PaymentComponent,
    PaymentDialogComponent,
    TimeConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatRadioModule,
    ChartsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkemJdxr8iVfUR-CaQK2N8tmK2GqjVCmc'
    })
  ],
  providers: [
    DatePipe,
    LoginServiceService
  ],
  entryComponents: [
    PaymentDialogComponent,
    TimeConfirmationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }