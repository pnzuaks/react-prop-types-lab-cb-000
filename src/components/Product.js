
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{ this.props.string }</li>
          <li>{ this.props.producer }</li>
          <li>{ this.props.hasWatermark }</li>
          <li>{ this.props.color }</li>
          <li>{ this.props.weight }</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
};
