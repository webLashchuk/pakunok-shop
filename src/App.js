import s from './App.module.scss';
import Header from './Components/Header/Header';
import Main from './Layouts/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
