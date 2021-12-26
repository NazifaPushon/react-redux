import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import ItemsContainer from './components/ItemsContainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
        <IcecreamContainer/>
        <NewCakeContainer/>
        <ItemsContainer/>
        <ItemsContainer cake/>
    </div>
    </Provider>
  );
}

export default App;
