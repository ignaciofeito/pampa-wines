import './App.css';
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'

const App = props => {

  return <>

    <NavBar />
    <ItemCount stock="5" initial="1" />
  </>
}

export default App;