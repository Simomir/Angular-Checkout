import { Component } from '@angular/core';
import { I18nPluralPipe } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemPluralMapping = {
    'this': {
      '=0': 'these',
      '=1': 'this',
      'other': 'these'
    },
    'item': {
      '=0': 'items',
      '=1': 'item',
      'other': 'items'
    }
  };
}
