import React from "react";

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter-header">
                <h4>Search</h4>
                <a href="#" className="clear">Clear</a>
            </div>
            <div>
                <input type="text" placeholder="search..."/>
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
    );
  };
  
  export default Filter;