import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { counterSlice } from './App';

const CountWrapper = styled.div`
  display: flex;
`;
const CountButton = styled.button`
  margin: 0 10px;
  background-color: blue;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <CountWrapper>
      <CountButton
        onClick={() => {
          // dispatch({ type: 'counterSlice/increment', step: 2 });
          dispatch(counterSlice.actions.increment(2)); // 인자인 2는 action의 payload 속성으로 넘어간다.
        }}
      >
        +
      </CountButton>
      <div>{count}</div>
      <CountButton
        onClick={() => {
          //dispatch({ type: 'counterSlice/decrement', step: 2 });
          dispatch(counterSlice.actions.decrement(2));
        }}
      >
        -
      </CountButton>
    </CountWrapper>
  );
};

export default Counter;
