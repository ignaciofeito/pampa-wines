import './App.css';
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

const App = props => {

  return <>

    <NavBar />
    <ItemListContainer greeting="Hola! Estamos trabajando para traer los mejores instrumentos para vos" />
  </>
}

export default App;