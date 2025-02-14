import s from './App.module.scss';
import Header from './Components/Header/Header';
import Main from './Layouts/Main';
import Footer from './Components/Footer/Footer';
import CartLayout from './Layouts/CartLayout';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
      <CartLayout />
      <Footer />
    </div>
  );
}

export default App;
