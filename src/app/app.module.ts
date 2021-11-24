import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AlertModule } from 'ngx-alerts';
import { BindingComponent } from './binding/binding.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 1000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
