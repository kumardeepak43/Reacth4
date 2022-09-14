import React from 'react';

const products = [
  {productName: 'Alovira', price: 1000},
  {productName: 'Sumsung', price: 1000},
  {productName: 'DEll', price: 10000},
  {productName: 'Micromax', price: 10000},
]

const withSearch = (WrappedComponent) => {
  class SearchFuctionality extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        search: ''
      }
    }

    updateSearch = (e) => {
      this.setState({search:e.target.value})
    }

    filterProducts = () => {
      return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
    }

    render() {
      const updatedProducts = this.filterProducts();
      return(
        <div>
          <input type="text" onChange={this.updateSearch} />
          <WrappedComponent products={updatedProducts}/>
        </div>
      )
    }
  }

  return SearchFuctionality;
}

export default withSearch;