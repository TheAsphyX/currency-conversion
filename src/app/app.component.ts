import { AmountChangeAction } from './actions/amount';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public store: Store<fromRoot.State>) { }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) this.store.dispatch(new AmountChangeAction(number));
  }

}
