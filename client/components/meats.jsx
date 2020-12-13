import React from 'react';

export default class Meats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meats: []
    };
    this.getMeatToppings = this.getMeatToppings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderPizza = this.renderPizza.bind(this);
  }

  handleChange(e) {
    const topping = this.state.meats.filter(add => add.name === e.target.name);

    if (!topping[0].checked) {
      topping[0].checked = true;
      const add = topping[0];
      this.props.pizzaMeats(add, 'add');
    } else {
      topping[0].checked = false;
      const remove = topping[0];
      this.props.pizzaMeats(remove, 'remove');
    }
  }

  componentDidMount() {
    this.getMeatToppings();
  }

  getMeatToppings() {
    fetch('/api/meats')
      .then(res => res.json())
      .then(meats => {
        for (let i = 0; i < meats.length; i++) {
          meats[i].checked = false;
        }
        this.setState(state => ({
          meats: meats
        }));
      })
      .then(() => {
        const selectedMeats = this.props.passMeats();
        if (selectedMeats) {
          const copy = this.state.meats.slice();
          for (let i = 0; i < selectedMeats.length; i++) {
            for (let j = 0; j < copy.length; j++) {
              if (selectedMeats[i].name === copy[j].name) {
                copy[j].checked = true;
              }
            }
          }
          this.setState({
            meats: copy
          });

        }
      }
      );
  }

  renderPizza() {
    return (
      this.props.renderPizza()
    );
  }

  render() {
    return (
      <div className="outer shadow">
        <div className="app">
          <this.renderPizza />
          <div className="toppings-section">
            <div className="buttons">
              <div onClick={() => this.props.setView('base', null)} className="base">
                <i className="fas fa-pizza-slice fa-lg mr-2"></i>
                <h3>Base</h3>
              </div>
              <div onClick={() => this.props.setView('meats', null)} className="meats shadows">
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
              <div className="meats-opt">
                <form action="submit">
                  <div className="size pt-4">
                    <div className="sizing m-2">
                      <h2 className="form-headers pl-4">3. Choose Your Meats</h2>
                      <div className="choices ml-4">
                        <div className="form-check topping-items">
                          {this.state.meats.map(meats => {
                            return (

                              <div key={meats.toppingId}>
                                <input className="form-check-input" type="checkbox" name={meats.name} id={meats.toppingId} value={meats.price} onChange={this.handleChange} image={meats.image} checked={meats.checked}/>
                                <label className="form-check-label meats-options" htmlFor={meats.name}>
                                  <span>{meats.name}</span> ({meats.description})
                                </label>
                                <p className="price">+${(meats.price / 100).toFixed(2)}</p>
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
