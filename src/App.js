import './App.css';
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

const App = props => {

  return <>

    <NavBar />
    <ItemListContainer>
    </ItemListContainer>
  </>
}

export default App;