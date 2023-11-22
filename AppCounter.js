import store from './src/store/configureStore';
import {Provider} from 'react-redux';
import {ReduxDemo} from './src/screen/reduxDemo/ReduxDemo';

const AppCounter = () => {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  );
};

export default AppCounter;
