import './App.css';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <section className='App'>
      <Switch>
        <Redirect exact from='/' to='/cars' />
        <Route exact path='/cars'>
          <Cars />
        </Route>
        <Route path='/cars/:id'>
          <CarDetails />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
