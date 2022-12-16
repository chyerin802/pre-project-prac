import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    // action의 형태를 지정
    increment: (state, action) => {
      //state.value += action.step;
      console.log(action); // {type: 'counterSlice/increment', payload: 2}
      state.value += action.payload;
    },
    decrement: (state, action) => {
      //state.value -= action.step;
      state.value -= action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    // counter에 대한 reducer는 counterSlice
    // counter라는 작은 store를 만든 것
    counter: counterSlice.reducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter></Counter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
