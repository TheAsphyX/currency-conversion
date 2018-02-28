import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import { Currency } from './../models/currency';

export interface State {
    amount: number;
    currencies: Currency[];
};

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer
};

export const getAmountState = (state: State) => state.amount;

export const getCurrnecyRates = (state: State) => state.currencies;