import React, { Component } from "react";
import Container from "../Container/Container";
import Headerbig from "../Headerbig/Headerbig";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";

class Catalog extends Component {

  render() {
    return (
      <Container>
        <Headerbig title="Catalog" />
        <div className="catalog">
          <div className="column-left">
            <Filter />
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
