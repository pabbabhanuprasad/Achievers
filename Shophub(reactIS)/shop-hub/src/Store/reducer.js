import { combineReducers } from "redux";
import { ADD_ITEM, DELETE_ITEM ,increment,decrement} from "./ActionType";
const defaultState = {
  users: [],
  persons: [],
  products: [
    // {
    //   category: "men's clothing",
    //   description:
    //     "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    //   id: 3,
    //   image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //   price: 55.99,
    //   rating: { rate: 4.7, count: 500 },
    //   title: "Mens Cotton Jacket",
    // },
  ],
  books: [],
};
export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const exist =
        state.products && state.products.find((x) => x.id === action.payload.id);
      if (exist) {
        state.products.map((x, i) => {
          if (x.id === action.payload.id) {
            return (state.products[i].qty += 1);
          }
        });
      } else {
        let newProduct = [...state.products];
        newProduct.push({ ...action.payload, qty: 1 });
        return { ...state, products: newProduct };
      }
      break;

    case DELETE_ITEM:
      // console.log("delete");
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

      case increment:
        console.log(action.payload);
         state.products.forEach((x, i) => {
          if (x.id === action.payload.id) {
            return state.products[i].qty += 1;
          }
        });
        // console.log(newUpdated);
        // return {...state,products:newUpdated}
        return state;
        
        break;

        case decrement:
          console.log(action.payload);
          state.products.map((x, i) => {
            if (x.id === action.payload.id) {
              return (state.products[i].qty -= 1);
            }

          });
          break;
        
    default:
      return state;
      break;
  }
};

export const rootReducer = combineReducers({
  products: productsReducer,
});
