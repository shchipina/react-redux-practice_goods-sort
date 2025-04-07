import { useSelector } from 'react-redux';

import goods from './goods.json';
import { GoodsList } from './components/GoodsList';
import { Buttons } from './components/Buttons';

const App = () => {
  const { sortField, isReversed, selectedGood } = useSelector(
    state => state.sortBy,
  );

  const message = selectedGood
    ? `${selectedGood} is selected`
    : 'Good is no selected';

  const visibleGoods = [...goods].sort((good1, good2) => {
    switch (sortField) {
      case 'id':
        return good1.id - good2.id;
      case 'color':
      case 'name':
        return good1[sortField].localeCompare(good2[sortField]);
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <>
      <h1>{message}</h1>

      <Buttons />
      <GoodsList goods={visibleGoods} />
    </>
  );
};

export default App;
