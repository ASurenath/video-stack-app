import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Mainpage from './pages/Mainpage';
import History from './pages/History';
import Catwise from './pages/Catwise';
import Pnf from './pages/Pnf';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/main' element={<Mainpage></Mainpage>}>
        </Route>
        <Route path='/history' element={<History></History>}>
        </Route>
        <Route path='/category/:id' element={<Catwise></Catwise>}>
        </Route>
        <Route path='*' element={<Pnf></Pnf>}>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
