import React from 'react';
// import Tile from './icon-tile';

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPizza: '',
      currentBase: ''
    };
    this.pizza = this.pizza.bind(this);
    this.price = this.price.bind(this);
    this.renderTile = this.renderTile.bind(this);
    this.updatedPizzaSelected = this.updatedPizzaSelected.bind(this);
    this.getPreviousSize = this.getPreviousSize.bind(this);
    this.renderBaseTiles = this.renderBaseTiles.bind(this);
  }

  componentDidMount() {
    const previousSize = this.getPreviousSize();
    const previousCrust = this.getPreviousCrust();
    this.setState({
      currentPizza: previousSize,
      currentBase: previousCrust
    });
  }

  pizza() {
    return (
      this.props.renderPizza()
    );
  }

  price() {
    const pricing = this.props.basePrice();
    return pricing;
  }

  updatedPizzaSelected(val) {
    this.setState({
      currentPizza: val
    });
  }

  updatedCrustSelected(crust) {
    this.setState({
      currentBase: crust
    });
  }

  getPreviousSize() {
    const size = this.props.baseSize();
    return size;
  }

  getPreviousCrust() {
    const crust = this.props.baseCrust();
    return crust;
  }

  renderTile() {
    const price = this.price();

    const small =
      <div className={this.state.currentPizza === 'small' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="size" id="small" value="small" onClick={() => { this.props.pizzaBase('small'); this.updatedPizzaSelected('small'); }}>
        <div className='image-bkg'>
          <img className='tile-image' src="./images/pizza-small.png" alt="small" />
        </div>
        <div className='title-container'>
          <div className="tile-title">
            <h4 className='title-details' value="small">SMALL | <span>{price.small.slices} <i className="fas fa-pizza-slice fa-md mr-2"></i></span></h4>
          </div>
          <p className='slices-blurb' value="small">$7.99</p>
          <p className='calories-blurb' value="small">{price.small.calPerSlice} Calories per slice</p>
        </div>
      </div>;

    const medium =
      <div className={this.state.currentPizza === 'medium' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="size" id="medium" value="medium" onClick={() => { this.props.pizzaBase('medium'); this.updatedPizzaSelected('medium'); }}>
        <div className='image-bkg'>
          <img className='tile-image' src="./images/pizza-medium.png" alt="placeholder" />
        </div>
        <div className='title-container'>
          <h4 className='title-details'>MEDIUM | <span>{price.medium.slices} <i className="fas fa-pizza-slice fa-md mr-2"></i></span></h4>
          <p className='slices-blurb'>$9.99</p>
          <p className='calories-blurb'>{price.medium.calPerSlice} Calories per slice</p>
        </div>
      </div>;

    const large =
      <div className={this.state.currentPizza === 'large' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="size" id="large" value="large" onClick={() => { this.props.pizzaBase('large'); this.updatedPizzaSelected('large'); }}>
        <div className='image-bkg'>
          <img className='tile-image' src="./images/pizza-large.png" alt="placeholder" />
        </div>
        <div className='title-container'>
          <h4 className='title-details'>LARGE | <span>{price.large.slices} <i className="fas fa-pizza-slice fa-md mr-2"></i></span></h4>
          <p className='slices-blurb'>$12.99</p>
          <p className='calories-blurb'>{price.large.calPerSlice} Calories per slice</p>
        </div>
      </div>;

    const extraLarge =
      <div className={this.state.currentPizza === 'extra-large' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="size" id="extra-large" value="extra-large" onClick={() => { this.props.pizzaBase('extra-large'); this.updatedPizzaSelected('extra-large'); }}>
        <div className='image-bkg'>
          <img className='tile-image' src="./images/pizza-extra-large.png" alt="placeholder" />
        </div>
        <div className='title-container'>
          <h4 className='title-details'>XLARGE | <span>{price['extra-large'].slices} <i className="fas fa-pizza-slice fa-md mr-2"></i></span></h4>
          <p className='slices-blurb'>$14.99</p>
          <p className='calories-blurb'>{price['extra-large'].calPerSlice} Calories per slice</p>
        </div>
      </div>;
    return (
      <div className='size-container'>
        <div className='sm-md'>
          {small}
          {medium}
        </div>
        <div className='lg-xlg'>
          {large}
          {extraLarge}
        </div>
      </div>
    );
  }

  renderBaseTiles() {
    const price = this.price();

    const thin =
      <div className={this.state.currentBase === 'thin-italian' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="crust" id="thin-italian" value="thin-italian" onClick={() => { this.props.pizzaCrust('thin-italian'); this.updatedCrustSelected('thin-italian'); }}>
        <div className='image-bkg'>
          <img className='tile-image' src="./images/italian.png" alt="thin-italian" />
        </div>
        <div className='title-container'>
          <div className="tile-title">
            <h4 className='title-details' value="thin-italian">ITALIAN</h4>
          </div>
          <p className='slices-blurb mb-2' value="thin-italian">+ ${ (price['thin-italian'] / 100).toFixed(2) }</p>
        </div>
      </div>;

    const regular =
    <div className={this.state.currentBase === 'regular' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="crust" id="regular" value="regular" onClick={() => { this.props.pizzaCrust('regular'); this.updatedCrustSelected('regular'); }}>
      <div className='image-bkg'>
        <img className='tile-image' src="./images/regular.png" alt="regular" />
      </div>
      <div className='title-container'>
        <div className="tile-title">
          <h4 className='title-details' value="regular">REGULAR</h4>
        </div>
        <p className='slices-blurb mb-2' value="regular">Included</p>
      </div>
    </div>;

    const deep =
    <div className={this.state.currentBase === 'deep-pan' ? 'tile-container m-2 tile-select' : 'tile-container m-2'} name="crust" id="deep-pan" value="deep-pan" onClick={() => { this.props.pizzaCrust('deep-pan'); this.updatedCrustSelected('deep-pan'); }}>
      <div className='image-bkg'>
        <img className='tile-image' src="./images/deep.png" alt="deep-pan" />
      </div>
      <div className='title-container'>
        <div className="tile-title">
          <h4 className='title-details' value="deep-pan">DEEP PAN</h4>
        </div>
        <p className='slices-blurb mb-2' value="deep-pan">+ ${(price['deep-pan'] / 100).toFixed(2)} </p>
      </div>
    </div>;

    return (
      <div className='size-container'>
        <div className='sm-md'>
          {regular}
          {thin}
          {deep}
        </div>
      </div>
    );
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
                <div className="size pt-4">
                  <div className="sizing m-2">
                    <h2 className="form-headers pl-4">1. Choose Your Size</h2>
                    <div className="choices">
                      <this.renderTile/>
                    </div>
                  </div>
                  <div className="crust m-2 mt-3">
                    <h2 className="form-headers pl-4">2. Choose Your Crust</h2>
                    <div className="choices mt-2">
                      <this.renderBaseTiles/>
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
