import { Fragment, useContext } from 'react';
import CartContext from './store/cart-context';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  const ctx = useContext(CartContext);

  return (
    <Fragment>
      {ctx.cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
