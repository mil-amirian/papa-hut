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
    this.renderPreviousSelections = this.renderPreviousSelections.bind(this);
    this.getImagePath = this.getImagePath.bind(this);
    this.renderPizza = this.renderPizza.bind(this);
  }

  handleChange(name) {
    const topping = this.state.veggies.filter(add => add.name === name);

    if (!topping[0].checked) {
      topping[0].checked = true;
      const add = topping[0];
      this.props.pizzaVeggies(add, 'add');
    } else {
      topping[0].checked = false;
      const remove = topping[0];
      this.props.pizzaVeggies(remove, 'remove');
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
      })
      .then(() => {
        const selectedVeggies = this.props.passVeggies();
        if (selectedVeggies) {
          const copy = this.state.veggies.slice();
          for (let i = 0; i < selectedVeggies.length; i++) {
            for (let j = 0; j < copy.length; j++) {
              if (selectedVeggies[i].name === copy[j].name) {
                copy[j].checked = true;
              }
            }
          }
          this.setState({
            veggies: copy
          });
        }
      });
  }

  getImagePath(path) {
    const pathRefined = path.split('.');
    pathRefined.splice(1, 0, '-select');
    const newImagePath = `${pathRefined[0]}${pathRefined[1]}.${pathRefined[2]}`;
    return newImagePath;
  }

  renderPreviousSelections(checked) {
    if (checked) {
      return 'tile-container-veggie m-2 tile-select';
    } else {
      return 'tile-container-veggie m-2';
    }
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
                      <div className="choices">
                        <div className="topping-items d-flex flex-wrap justify-content-center">
                          {this.state.veggies.map(veggie => {
                            return (

                              <div
                                key={veggie.toppingId}
                                className={this.renderPreviousSelections(veggie.checked)}
                                name={veggie.name}
                                id={veggie.toppingId}
                                value={veggie.name}
                                onClick={() => { this.handleChange(veggie.name); }}
                                checked={false}>
                                <div className='image-bkg'>
                                  <img className='tile-image' src={this.getImagePath(veggie.image)} alt={veggie.name} />
                                </div>
                                <div className='title-container'>
                                  <div className="tile-title">
                                    <h4 className='title-details' value="deep-pan">{veggie.name}</h4>
                                  </div>
                                  <p className='slices-blurb' value="deep-pan">+ ${(veggie.price / 100).toFixed(2)} </p>
                                  <p className='calories-blurb' value={veggie.name}>({veggie.description})</p>

                                </div>
                              </div>
                              // <div key={veggie.toppingId}>
                              //   <input className="form-check-input" type="checkbox" name={veggie.name} id={veggie.toppingId} value={veggie.price} onChange={this.handleChange}/>
                              //   <label className="form-check-label meats-options" htmlFor={veggie.name}>
                              //     <span>{veggie.name}</span> ({veggie.description})
                              //   </label>
                              // </div>
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
