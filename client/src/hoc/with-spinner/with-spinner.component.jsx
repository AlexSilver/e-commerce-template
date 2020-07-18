import React from 'react';
import Spinner from '../../components/spinner';

export const withSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
};
