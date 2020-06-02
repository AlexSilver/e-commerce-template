import React from 'react';
import './App.scss';
import { HomePage, ShopPage, SignInAndSignUpPage, CheckoutPage } from './pages';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {



    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const userRef = await createUserProfileDocument(user);

    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({ id: snapShot.id, ...snapShot.data() });
    //     });
    //   }

    //   setCurrentUser(user);
    // });

    // addCollectionAndDocuments(
    //   'collections',
    //   collectionsForPreview.map(({ title, items }) => ({ title, items }))
    // );
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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsForPreview: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(App);
