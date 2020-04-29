import React from 'react';
import './App.scss';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      }

      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className='App'>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
