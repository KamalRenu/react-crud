import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import ProductList from './ProductList';
import ProductEdit from './product-edit';
import ProductDelete from './product-delete';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductCreate from './product-create';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/product-create" element={<ProductCreate />}></Route>
                <Route path="/product-edit/:id" element={<ProductEdit />}></Route>
                <Route path="/product-delete/:id" element={<ProductDelete />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
