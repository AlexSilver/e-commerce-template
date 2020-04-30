import React from 'react';
import './App.scss';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }

      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user: {currentUser}}) => {
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCurrentUser,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
