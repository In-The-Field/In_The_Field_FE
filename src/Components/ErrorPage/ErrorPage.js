import React from 'react';

const ErrorPage = ({ error }) => {
  let errorMessage = 'An error occurred.';

  if (error) {
    if (error.status === 404) {
      errorMessage = 'Page not found.';
    } else if (error.status === 500) {
      errorMessage = 'Internal server error.';
    } else if (error.message) {
      errorMessage = error.message;
    }
  }

  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
