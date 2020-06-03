import {Route} from '@angular/router';
import {FaqComponent} from "./faq/faq.component";
import {MainComponent} from "./main/main.component";
import {DownloadComponent} from "./download/download.component";
import {PrivacyComponent} from "./privacy/privacy.component";


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
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'faq/:url',
    component: FaqComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
