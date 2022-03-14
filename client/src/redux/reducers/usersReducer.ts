import {
  Action,
  UsersState,
  UserActionTypes,
} from '../../types/redux/reducers/usersReducer.types';
import usersAPI from '../../api/users.api';

const initialState: UsersState = {
  user: {
    username: '',
    userId: 0,
  },
  isAuth: false,
};

const booksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: {
          username: action.payload.username,
          userId: action.payload.userId,
        },
      };
    case UserActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
};

export const setIsAuth = (isAuth: boolean) => {
  return {
    type: UserActionTypes.SET_IS_AUTH,
    payload: {
      isAuth: isAuth,
    },
  };
};

export const setUser = (username: string, userId: number) => {
  return {
    type: UserActionTypes.SET_USER,
    payload: {
      username: username,
      userId: userId,
    },
  };
};

export const getUser = (token: string) => async (dispatch: any) => {
  const user = await usersAPI.profile({token});
  if (user.userId) {
    dispatch(setIsAuth(true));
  }
  dispatch(setUser(user.username, user.userId));
};


export default booksReducer;
