import { useSelector, useDispatch } from 'react-redux';
import { sort, toggleReversed, reset } from '../app/slice/sortSlice';

export const Buttons = () => {
  const { sortField, isReversed } = useSelector(state => state.sortBy);
  const dispatch = useDispatch();

  return (
    <div className="buttons">
      {['id', 'color', 'name'].map(item => (
        <button key={item} onClick={() => dispatch(sort(item))}>
          {item}
        </button>
      ))}

      <button type="button" onClick={() => dispatch(toggleReversed())}>
        Reverse
      </button>

      {(sortField || isReversed) && (
        <button type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      )}
    </div>
  );
};
