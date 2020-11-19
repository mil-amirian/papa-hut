import React from 'react';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="outer">
        <div className="app">
          <div className="pizza-viewer">
            <div className="image-container overlap">
              <img src="images/pizza-base.png" className="parent-img-responsive" />
              <img src="images/pepperoni.png" className="img-responsive" />
              <img src="images/green-peppers.png" className="img-responsive" />
              <img src="images/beef.png" className="img-responsive" />
            </div>
          </div>
          <div className="toppings-section">
            <div className="buttons">
              <div onClick={() => this.props.setView('base', null)} className="base">
                <i className="fas fa-pizza-slice fa-lg mr-2"></i>
                <h3>Base</h3>
              </div>
              <div onClick={() => this.props.setView('meats', null)} className="meats">
                <i className="fas fa-bacon fa-lg mr-2"></i>
                <h3>Meats</h3>
              </div>
              <div className="veggies">
                <i className="fas fa-leaf fa-lg mr-2"></i>
                <h3>Veggies</h3>
              </div>
              <div className="option">
                <i className="fas fa-fire-alt fa-lg mr-2"></i>
                <h3>Options</h3>
              </div>
            </div>
            <div className="options">
              <div className="base-opt">
                <form action="submit">
                  <div className="size pt-4">
                    <div className="sizing m-2">
                      <h2 className="form-headers pl-4">Size</h2>
                      <div className="choices ml-4">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="size" id="small" value="small" />
                          <label className="form-check-label" htmlFor="small">
                            <span>Small</span> (6 slices)
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="size" id="medium" value="medium" />
                          <label className="form-check-label" htmlFor="medium">
                            <span>Medium</span> (8 slices)
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="size" id="large" value="large" />
                          <label className="form-check-label" htmlFor="large">
                            <span>Large</span> (10 slices)
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="size" id="extra-large" value="extra-large" />
                          <label className="form-check-label" htmlFor="extra-large">
                            <span>Extra-Large</span> (14 slices)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="crust m-2">
                      <h2 className="form-headers pl-4">Crust</h2>
                      <div className="choices ml-4">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios2" value="regular" />
                          <label className="form-check-label" htmlFor="regular">
                            <span>Regular</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios3" value="thin" />
                          <label className="form-check-label" htmlFor="thin">
                            <span>Thin Italian</span> (+$1.50)
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="crust" id="exampleRadios3" value="deep" />
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
