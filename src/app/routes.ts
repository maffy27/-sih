import {Route} from '@angular/router';
import {FaqComponent} from "./faq/faq.component";
import {MainComponent} from "./main/main.component";
import {DownloadComponent} from "./download/download.component";
import {HelpComponent} from "./help/help.component";


export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'faq/:name',
    component: FaqComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
