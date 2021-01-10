import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';

const App = () => {
    const initialState = {
        counter: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const increaseHandler = () => {
        dispatch({ type: "INCREASE" })
    }
    const decreaseHandler = () => {
        dispatch({ type: "DECREASE" })
    }
    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            {state.counter}
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));