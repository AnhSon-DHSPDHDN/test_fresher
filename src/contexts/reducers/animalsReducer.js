import { TypesContextAnimals } from '../../configs/types';

export const animailsReducer = (state, action) => {
  switch (action.type) {
    case TypesContextAnimals.GET_ALL_ANIMALS: {
      state = {
        ...action.data,
        isLoading: false
      };
      return state
    }
    case TypesContextAnimals.GET_ALL_DOGS: {
      state = {
        ...action.data,
        isLoading: false
      }
      return state;
    }
    case TypesContextAnimals.SET_LOADING: {
      state = {
        ...state,
        isLoading: true
      }
      return state;
    }
    default: return { ...state }
  }
}