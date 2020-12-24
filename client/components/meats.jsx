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
    this.getImagePath = this.getImagePath.bind(this);
    this.renderPreviousSelections = this.renderPreviousSelections.bind(this);
  }

  handleChange(name) {
    const topping = this.state.meats.filter(add => add.name === name);

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
        // console.log(meats);
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

  getImagePath(path) {
    const pathRefined = path.split('.');
    pathRefined.splice(1, 0, '-select');
    const newImagePath = `${pathRefined[0]}${pathRefined[1]}.${pathRefined[2]}`;
    return newImagePath;
  }

  renderPizza() {
    return (
      this.props.renderPizza()
    );
  }

  renderPreviousSelections(checked) {
    if (checked) {
      return 'tile-container-meats m-2 tile-select';
    } else {
      return 'tile-container-meats m-2';
    }
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
                <div className="size pt-4">
                  <div className="sizing m-2">
                    <h2 className="form-headers pl-4">3. Choose Your Meats</h2>
                    <div className="choices">
                      <div className="topping-items">
                        {this.state.meats.map(meats => {
                          return (
                            <div
                              key={meats.toppingId}
                              className={this.renderPreviousSelections(meats.checked)}
                              name={meats.name}
                              id={meats.toppingId}
                              value={meats.name}
                              onClick={() => { this.handleChange(meats.name); }}
                              checked={false}
                            >
                              <div className='image-bkg'>
                                <img className='tile-image' src={this.getImagePath(meats.image)} alt={meats.name} />
                              </div>
                              <div className='title-container'>
                                <div className="tile-title">
                                  <h4 className='title-details' value="deep-pan">{meats.name}</h4>
                                </div>
                                <p className='slices-blurb' value="deep-pan">+ ${(meats.price / 100).toFixed(2)} </p>
                                <p className='calories-blurb' value={meats.name}>({meats.description})</p>

                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
