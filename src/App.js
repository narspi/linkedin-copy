import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <Provider store={store}>
    <div className="bg-gray-100">
    <BrowserRouter>
      <Header />
      <div className="container mx-auto p-2 flex mt-6">
        <Sidebar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
    // </Provider>
  );
}

export default App;
