import s from './App.module.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
