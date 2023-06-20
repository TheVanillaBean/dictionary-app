import { createContext, useReducer } from 'react';

export const APP_ACTIONS = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  UPDATE_FONT: 'UPDATE_FONT',
  SET_WORD_DEFINITION: 'SET_WORD_DEFINITION',
};

export const AppContext = createContext();

export const formatFont = (font) => {
  if (font === 'font-sans') {
    return 'Sans Serif';
  } else if (font === 'font-serif') {
    return 'Serif';
  }
  return 'Mono';
};

const initialState = {
  darkMode: true,
  font: 'font-serif',
  definition: null,
};

const appReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case APP_ACTIONS.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case APP_ACTIONS.UPDATE_FONT:
      return {
        ...state,
        font: payload,
      };

    case APP_ACTIONS.SET_WORD_DEFINITION:
      return {
        ...state,
        definition: payload,
      };
    default: {
      return state;
    }
  }
};

const AppProvider = (props) => {
  const [appState, dispatchApp] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatchApp }}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
