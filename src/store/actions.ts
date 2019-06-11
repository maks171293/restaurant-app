import { Restaurant, LoadRestaurantsRequest, LoadRestaurantsSuccess, LoadRestaurantsFailure } from './types';

export const loadRestaurantsRequest = (): LoadRestaurantsRequest => ({
  type: "loadRestaurantsRequest",
})

export const loadRestaurantsSuccess = (restaurants: Restaurant[]): LoadRestaurantsSuccess => ({
  type: 'loadRestaurantsSuccess',
  restaurants,
})

export const loadRestaurantsFailure = (): LoadRestaurantsFailure => ({
  type: 'loadRestaurantsFailure',
})