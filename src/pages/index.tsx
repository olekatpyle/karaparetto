import { UIContext } from '@/components';
import store from '@/redux/store';
import { Provider } from 'react-redux';

export default function Page() {
  return (
    <Provider store={store}>
      <UIContext />
    </Provider>
  );
}
