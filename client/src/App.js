import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import Spinner from './components/spinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, checkUserSession } from './redux/user';

const HomePage = lazy(() => import('./pages/home/index'));
const ShopPage = lazy(() => import('./pages/shop/index'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sing-up/index')
);
const CheckoutPage = lazy(() => import('./pages/checkout/index'));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
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
          </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  checkUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
