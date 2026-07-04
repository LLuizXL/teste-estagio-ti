
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import './App.css'
import { SobreMim } from './pages/SobreMim'
import { Header } from './components/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer/Footer';

function App() {
  return (
   <Router>
  <Header />
  <Routes>
    <Route path='/sobremim' element={<SobreMim/>}></Route>
    <Route path='/formacao'></Route>
    <Route path='/conhecimentos'></Route>
    <Route path='/contato'></Route>
  </Routes>
<Footer />
</Router>
)
}

export default App
