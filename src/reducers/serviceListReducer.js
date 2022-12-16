import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from '../actions/actionTypes';

const initialState = [
  { id: nanoid(), name: 'Заметка стекла', price: 1200 },
  { id: nanoid(), name: 'Замена экрана', price: 2500 },
];

export default function ServiceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    }

    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter(o => o.id !== id)
    }
      


    case EDIT_SERVICE:
      const { editId, editName, editPrice } = action.payload; 
      return state.map(el => {
        if (el.id === editId) {
          return {
            ...el,
            name: editName,
            price: editPrice,
          }
        }
        return el
      });

    default:
      return state;
  }
}