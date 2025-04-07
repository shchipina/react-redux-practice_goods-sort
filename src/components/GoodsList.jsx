import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGood } from '../app/slice/sortSlice';

export const GoodsList = ({ goods }) => {
  const { selectedGood } = useSelector(state => state.sortBy);
  const dispatch = useDispatch();

  return (
    <div>
      {goods.map(good => (
        <div key={good.id}>
          <button onClick={() => dispatch(setSelectedGood(good.name))}>
            {selectedGood === good.name ? '-' : '+'}
          </button>
          <li style={{ listStyle: 'none', display: 'inline' }}>{good.name}</li>
        </div>
      ))}
    </div>
  );
};
