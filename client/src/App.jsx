import React from 'react'
import { LogIn } from './pages/LogIn';
import { Register} from './pages/Register';
import { Home } from "./pages/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { PublicRoute,PrivateRoute } from './routes';
const App = () => {

  return (
    <div className="w-screen h-screen">
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/sign-in" element={<LogIn />} />
              <Route path="/sign-up" element={<Register />} />
            </Route>
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
