import React, { useState, useEffect} from 'react';
import 'styles/styles.css';
import 'styles/responsive-test.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Admin from 'pages/admin/Admin';
import Index from 'pages/Index';
import Test from 'pages/test'
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Vehiculos from 'pages/admin/Vehiculos';
import Clientes from 'pages/admin/Clientes';
import {DarkModeContext} from 'context/DarkMode'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log('modo dark: ', darkMode)
  }, [darkMode])
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/vehiculos', '/admin/clientes', '/test']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/vehiculos'>
                  <Vehiculos />
                </Route>
                <Route path='/test'>
                  <Test />
                </Route>
                <Route path='/admin/clientes'>
                  <Clientes />
                </Route>
                <Route path='/admin'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/registro']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/registro'>
                  <Registro/>
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
          <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
