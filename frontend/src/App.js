import './App.css';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import EditSuccessMessage from './pages/EditSuccessMessage';
import AddCar from './pages/AddCar';
import AddOwner from './pages/AddOwner';

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
        <Route exact path='/success'>
          <EditSuccessMessage />
        </Route>
        <Route path='/add/owner'>
          <AddOwner />
        </Route>
        <Route path='/add/car'>
          <AddCar />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
