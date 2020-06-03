import {Component, OnInit} from '@angular/core';
import {IFaq} from "../shared/interfaces/faq.interface";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})


export class FaqComponent implements OnInit {

  public faqArray:IFaq[] = [
    {
      url: 'a',
      faq_title: 'Is this extension FREE?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'Yes, Steam Inventory Helper is a free based app.'
        }
      ]
    },
    {
      url: 'b',
      faq_title: 'How can I download it?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'You can download our extension for free by clicking the button in the upper right corner.'
        },
        {
          item_id: 1,
          item_title: '',
          item_text: 'Just for test'
        }
      ]
    },
    {
      url: 'c',
      faq_title: 'How can I install it?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'Just press the "Add to Chrome" button and it will be installed at your Chrome.'
        }
      ]
    },
    {
      url: 'd',
      faq_title: 'How can I run it?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'After the installation it will have been already enabled.'
        }
      ]
    },
    {
      url: 'e',
      faq_title: 'Can it steal my account data? / Can I get banned for it?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'No, Steam Inventory Helper wont take any personal information of your account and wont steal any data from you. Nope, you cant get banned for using SIH.'
        }
      ]
    },
    {
      url: 'f',
      faq_title: 'Some features are asking me to log in with Steam / Some features are asking me to insert the "API Key"',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'Some features of SIH requires signing in with Steam to verify if the account is yours. / Some features requires inserting the "API Key" as they use Steam API to gather the data that is not accessable without it. Inserting API key is up to you. SIH will work without it anyway, just without some of these features.'
        }
      ]
    },
    {
      url: 'g',
      faq_title: 'When will you add a feature "N"? / How can I suggest a feature?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'We are working on the current features (by updating them and making them even better) and on the new features 24/7. Please feel free to suggest your feature by sending it to us via our contacts, we are always happy to hear something new & cool from you!'
        }
      ]
    },
    {
      url: 'h',
      faq_title: 'When will you fix feature "N"? / How can I report on a bug?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'We are working on fixes and we are searching for bugs 24/7. However, feel free to report on a bug via our contacts. We are always happy when you are satisfied with your app experience and that you are trying to make our app even better!'
        }
      ]
    },
    {
      url: 'k',
      faq_title: 'My extension is not enabled, what should I do?',
      faq_items: [
        {
          item_id: 0,
          item_title: '',
          item_text: 'Go to the Chrome settings/extensions and tick the extension.'
        }
      ]
    }
  ]
  public currURL: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currURL = this.activatedRoute.snapshot.params['url'];
  }

}
