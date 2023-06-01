import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
