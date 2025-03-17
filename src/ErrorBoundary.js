import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with a flag for error detection
    this.state = { hasError: false };
  }

  // Update state so the next render shows the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log the error (you can also send error details to a logging service)
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render any fallback UI you want when an error occurs
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    // Render children components if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
