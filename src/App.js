import React from 'react';
import './App.scss';
import { HomePage, ShopPage } from './pages';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
