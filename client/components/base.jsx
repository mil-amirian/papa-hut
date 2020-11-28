import React from 'react';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      crust: null
    };
    this.pizza = this.pizza.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  pizza() {
    return (
      this.props.renderPizza()
    );
  }

  handleChange(e) {
    if (e.target.name === 'size') {
      this.setState({
        size: e.target.value
      });
    } else if (e.target.name === 'crust') {
      this.setState({
        crust: e.target.value
      });
    }
  }

  render() {
    return (
      <div className="outer">
        <div className="app">
          {this.pizza()}
          <div className="toppings-section">
            <div className="buttons">
              <div onClick={() => this.props.setView('base', null)} className="base shadows">
                <i className="fas fa-pizza-slice fa-lg mr-2"></i>
                <h3>Base</h3>
              </div>
              <div onClick={() => this.props.setView('meats', null)} className="meats">
                <i className="fas fa-bacon fa-lg mr-2"></i>
                <h3>Meats</h3>
              </div>
              <div className="veggies" onClick={() => this.props.setView('veggies', null)}>
                <i className="fas fa-leaf fa-lg mr-2"></i>
                <h3>Veggies</h3>
              </div>
              {/* <div className="option">
                <i className="fas fa-fire-alt fa-lg mr-2"></i>
                <h3>Options</h3>
              </div> */}
            </div>
            <div className="options">
              <div className="base-opt">
                <form action="submit">
                  <div className="size pt-4">
                    <div className="sizing m-2">
                      <h2 className="form-headers pl-4">Size</h2>
                      <div className="choices ml-4">
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="small" value="small" onChange={() => { this.props.pizzaBase(event.target.value); }} />
                          <label className="form-check-label" htmlFor="small">
                            <span>Small</span> (6 slices)
                          </label>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="medium" value="medium" onChange={() => { this.props.pizzaBase(event.target.value); }} />
                          <label className="form-check-label" htmlFor="medium">
                            <span>Medium</span> (8 slices)
                          </label>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="large" value="large" onChange={() => { this.props.pizzaBase(event.target.value); }}/>
                          <label className="form-check-label" htmlFor="large">
                            <span>Large</span> (10 slices)
                          </label>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="size" id="extra-large" value="extra-large" onChange={() => { this.props.pizzaBase(event.target.value); }} />
                          <label className="form-check-label" htmlFor="extra-large">
                            <span>Extra-Large</span> (14 slices)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crust m-2">
                      <h2 className="form-headers pl-4">Crust</h2>
                      <div className="choices ml-4">
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios2" value="regular" onChange={() => { this.props.pizzaCrust(event.target.value); }} />
                          <label className="form-check-label" htmlFor="regular">
                            <span>Regular</span>
                          </label>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios3" value="thin" onChange={() => { this.props.pizzaCrust(event.target.value); }} />
                          <label className="form-check-label" htmlFor="thin">
                            <span>Thin Italian</span> (+$1.50)
                          </label>
                        </div>
                        <div className="form-check topping-items">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios3" value="deep" onChange={() => { this.props.pizzaCrust(event.target.value); }}/>
                          <label className="form-check-label" htmlFor="deep">
                            <span>Deep Pan</span> (+$2.50)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
