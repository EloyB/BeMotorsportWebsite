import Layout from "../components/Layout";
import { StateProvider, useStateValue } from "../context/StateProvider";
import "../styles/globals.css";
import reducer, { initialState } from "../context/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
