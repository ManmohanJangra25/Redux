import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const increamentHandler = () => {
    dispatch(counterActions.increament());
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); //Or we can use it like {amount: 5}
  }
  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
      <button onClick={toggleCounterHandler}>Toggle/Reset Counter</button>
    </main>
  );
};

export default Counter;
