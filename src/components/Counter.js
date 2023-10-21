import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const increamentHandler = () => {
    dispatch({
      type: 'increament',
    })
  }
  const increaseHandler = () => {
    dispatch({
      type: 'increase',
      amount: 5,
    })
  }
  const decreamentHandler = () => {
    dispatch({
      type: 'decreament',
    })
  }

  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle',
    })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
