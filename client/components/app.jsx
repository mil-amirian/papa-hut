import React from 'react';
import Base from './base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'base',
        toppings: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(view, params) {
    this.setState(
      {
        view: {
          name: view,
          toppings: { toppingsId: params }
        }
      }
    );
  }

  render() {
    return (
      <Base />
    );
  }
}
