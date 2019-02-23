import React, { Component } from "react";
import Container from "../Container/Container";
import Headerbig from "../Headerbig/Headerbig";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: allProds
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = () => {
    console.log("aaa" + this.value);
  }
  filterProducts = (e) => {
    const text = e.currentTarget.value;
    const filteredProducts = this.getFilteredProducts(text);
    this.setState({
      filteredProducts
    });
  }
  getFilteredProducts = (text) => {
    return allProds.filter(prod => prod.toLowerCase().includes(text.toLowerCase()));
  }
  render() {
    return (
      <Container>
        <Headerbig title="Catalog" />
        <div className="catalog">
          <div className="column-left">
            
            <div className="filter">
            <div className="filter-header">
                <h4>Search</h4>
                <a href="#" className="clear">Clear</a>
            </div>
            <div>
                <input type="text" placeholder="search..." onInput={this.filterProducts.bind(this)}/>
            </div>
            <h4>Manufacturer</h4>
            <div>
                <div>
                    <input type="radio" name="manufacturere" id="all" value="all" checked/>
                    <label for="all">All</label>
                </div>
                <div>
                    <input type="radio" name="manufacturere" id="apple" value="apple"/>
                    <label for="apple">Apple</label>
                </div>
                <div>
                    <input type="radio" name="manufacturere" id="dell" value="dell"/>
                    <label for="dell">Dell</label>
                </div>
            </div>
        </div>
            
          </div>
          <div className="column-right">
            <ProductsList />
          </div>
        </div>
      </Container>
    );
  }
}
// const Catalog = () => {
//   return (
//     <Container>
//       <Headerbig title="Catalog" />
//       <div className="catalog">
//         <div className="column-left">
//           <Filter />
//         </div>
//         <div className="column-right">
//           <ProductsList />
//         </div>
//       </div>
//     </Container>

//   );
// };

export default Catalog;