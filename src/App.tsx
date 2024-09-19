import CodingJunior from "./Components/CodingJunior";
import { Provider } from "react-redux";
import { store } from "./Store/Store.ts";

const App = () => (
  <Provider store={store}>
    <CodingJunior />
  </Provider>
);

export default App;
