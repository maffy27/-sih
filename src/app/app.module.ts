import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { FaqComponent } from './faq/faq.component';
import { DownloadComponent } from './download/download.component';
import { HelpComponent } from './help/help.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FaqComponent,
    DownloadComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
