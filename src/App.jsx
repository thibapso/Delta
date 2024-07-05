import './App.css'
import Header from './components/Header'
import Slogan from './components/Slogan'
import Descubra from './components/Descubra'
import Moedas from './components/Moedas'
import Imc from './components/Imc'
import Distancia from './components/Distancia'
import Temperatura from './components/Temperatura'
import Formas from './components/Formas'


function App() {

  return (
    <>
      <Header />
      <Slogan />
      <Descubra />
      <Moedas />
      <Imc />
      <Distancia />
      <Temperatura />
      <Formas />

      <a href="#" className="back-to-top">
        <span className="material-icons-outlined">keyboard_arrow_up</span>
      </a>
    </>
  )
}

export default App
