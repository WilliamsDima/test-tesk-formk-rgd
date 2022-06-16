import './App.scss';
import { Form } from './components/Form/Form';
import {Provider} from 'react-redux';
import { store } from './store/index';
import { Header } from './components/Header/Header';

function App() {

  return (
    <Provider store={store}>
          <div className="App">

            <div className="wrapper">
              <Header />
              <Form />
            </div>

        </div>
    </Provider>

  );
}

export default App;
