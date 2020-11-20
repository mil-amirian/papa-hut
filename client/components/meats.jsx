import React from 'react';

export default class Meats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meats: [],
      checked: []
    };
    this.getMeatToppings = this.getMeatToppings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderPizza = this.renderPizza.bind(this);
  }

  handleChange(e) {
    if (this.state.checked.length < 1) {
      const added = this.state.checked.concat(e.target.name);
      this.setState({ checked: added });
    } else {
      for (let i = 0; i < this.state.checked.length; i++) {
        if (e.target.name === this.state.checked[i]) {
          const removed = this.state.checked.filter(checked => checked !== e.target.name);
          this.setState({ checked: removed });
        } else {
          const added = this.state.checked.concat(e.target.name);
          this.setState({ checked: added });
        }
      }
    }
  }

  componentDidMount() {
    this.getMeatToppings();
  }

  getMeatToppings() {
    fetch('/api/meats')
      .then(res => res.json())
      .then(meats => {
        this.setState(state => ({
          meats: meats
        }));
      });
  }

  renderPizza() {
    return (
      this.state.checked.map(topping => {
        let imageName;
        this.state.meats.filter(image => {
          if (image.name === topping) {
            imageName = image.image;
          }
        });
        return (
          <img key={this.state.meats.toppingId} src = { imageName } className = "img-responsive" />
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
              <div onClick={() => this.props.setView('meats', null)} className="meats meats-shadow">
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
              <div className="meats-opt">
                <form action="submit">
                  <div className="size pt-4">
                    <div className="sizing m-2">
                      <h2 className="form-headers pl-4">Meats</h2>
                      <div className="choices ml-4">
                        <div className="form-check">
                          {this.state.meats.map(meats => {
                            return (
                              <div key={meats.toppingId}>
                                <input className="form-check-input" type="checkbox" name={meats.name} id={meats.toppingId} value={meats.price} onChange={this.handleChange}/>
                                <label className="form-check-label meats-options" htmlFor={meats.name}>
                                  <span>{meats.name}</span> ({meats.description})
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
