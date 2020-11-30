import React from 'react';

export default class Veggies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      veggies: [],
      checked: []
    };
    this.getVeggieToppings = this.getVeggieToppings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderPizza = this.renderPizza.bind(this);
  }

  handleChange(e) {
    if (e.target.checked) {
      const added = this.state.checked.concat(e.target.name);
      this.setState({ checked: added });
    } else {
      const removed = this.state.checked.filter(checked => checked !== e.target.name);
      this.setState({ checked: removed });
    }
  }

  componentDidMount() {
    this.getVeggieToppings();
  }

  getVeggieToppings() {
    fetch('/api/veggies')
      .then(res => res.json())
      .then(veggies => {
        this.setState(state => ({
          veggies: veggies
        }));
      });
  }

  renderPizza() {
    return (
      this.state.checked.map(topping => {
        let imageName;
        this.state.veggies.filter(image => {
          if (image.name === topping) {
            imageName = image.image;
          }
        });
        return (
          <img key={this.state.veggies.toppingId} src = { imageName } className = "img-responsive" />
        );
      }
      ));
  }

  render() {
    return (
      <div className="outer shadow">
        <div className="app">
          <div className="pizza-viewer">
            <div className="image-container overlap">
              <img src="images/pizza-base.png" className="parent-img-responsive" />
              <this.renderPizza />
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
              <div className="veggies shadows" onClick={() => this.props.setView('veggies', null)}>
                <i className="fas fa-leaf fa-lg mr-2"></i>
                <h3>Veggies</h3>
              </div>
              {/* <div className="option">
                <i className="fas fa-fire-alt fa-lg mr-2"></i>
                <h3>Options</h3>
              </div> */}
            </div>
            <div className="options">
              <div className="veggies-opt">
                <form action="submit">
                  <div className="size pt-4">
                    <div className="sizing m-2">
                      <h2 className="form-headers pl-4">4. Choose Your Veggies</h2>
                      <div className="choices ml-4">
                        <div className="form-check topping-items">
                          {this.state.veggies.map(veggie => {
                            return (
                              <div key={veggie.toppingId}>
                                <input className="form-check-input" type="checkbox" name={veggie.name} id={veggie.toppingId} value={veggie.price} onChange={this.handleChange}/>
                                <label className="form-check-label meats-options" htmlFor={veggie.name}>
                                  <span>{veggie.name}</span> ({veggie.description})
                                </label>
                              </div>
                            );
                          })}
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
