import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegPage from './pages/reg-page';
import SuccessPage from './pages/success-page';
import ErrorPage from './pages/error-page';
import EditPage from './pages/edit-page';
import AboutPage from './pages/about-page';
import PrivateRoutes from './utils/private-routes';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route
            path="/success"
            element={<SuccessPage/>}
            errorElement={<ErrorPage/>}
          />
          <Route
            path="/edit"
            element={<EditPage/>}
            errorElement={<ErrorPage/>}
          />
        </Route>
        <Route
          path="/"
          element={<RegPage />}
          errorElement={<ErrorPage/>}
        />
        <Route
          path="/about"
          element={<AboutPage />}
          errorElement={<ErrorPage/>}
        />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
