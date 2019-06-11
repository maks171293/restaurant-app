import { Action } from 'redux';

export interface Restaurant {
    name: string;
    rating: number;
}

export interface LoadingState {
    restaurants: boolean;
}

export interface ApplicationState {
    loading: LoadingState,
    restaurants: Restaurant[];
}

export interface LoadRestaurantsRequest extends Action {
    type: 'loadRestaurantsRequest';
}

export interface LoadRestaurantsSuccess extends Action {
    type: 'loadRestaurantsSuccess';
    restaurants: Restaurant[];
}

export interface LoadRestaurantsFailure extends Action {
    type: 'loadRestaurantsFailure';
}

export type ApplicationAction = ApplicationState | LoadRestaurantsRequest | LoadRestaurantsSuccess | LoadRestaurantsFailure;