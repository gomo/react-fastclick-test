import {App} from '../index.es6';
import initReactFastclick from 'react-fastclick';
initReactFastclick();

window.onload = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('wrapper')
  );
}
