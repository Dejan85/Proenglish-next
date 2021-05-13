import { Layout } from "src/components/frontend";
import "src/styles/main.scss";
import { Provider } from "react-redux";
import configureStore from "src/redux/configureStore";

const initialState = {};
const store = configureStore(initialState);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
