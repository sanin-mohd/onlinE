import logo from './logo.svg';
// import './App.css';
import Main from './Main'
import store from './Redux/store'
import {Provider} from 'react-redux'


function App() {
  return (
    <div className="App">
     <Provider store={store}>
        <Main/>
     </Provider>
    </div>
  );
}

export default App;
