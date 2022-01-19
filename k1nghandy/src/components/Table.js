import React from "react";
import HomeButton from "../hooks/HomeButton";
import TodoButton from "../hooks/TodoButton";

class SearchBar extends React.Component {
    render() {
        return (
            <h3>
                <form>
                    {/* <label for='customerType'>Who are you buying for? </label> */}
                    <input className='Input' name='customerType' id='customerType' placeholder='Search...'></input>
                </form>
            </h3>
        );
    }
}

class FilterableProductTable extends React.Component {

    render() {
        return (
            <div className='Container'>
                <header className='Header2'>
                    <SearchBar />
                </header>
                <aside className='Aside2 Aside-3'><HomeButton /></aside>
                <aside className='Aside2 Aside-4'><TodoButton /></aside>
                <article className='Main2'>
                    <fieldset>
                        <legend>DOB</legend>
                        {/* dobDay */}
                        <label for='dobDay'>Day</label>
                        <select id='dobDay'>...</select>
                        {/* dobMonth */}
                        <label for='dobMonth'>Month</label>
                        <select id='dobMonth'>...</select>
                        {/* dobYear */}
                        <label for='dobYear'>Year</label>
                        <input id='dobYear' type='text' placeholder='YYYY'></input>
                    </fieldset>
                    {/* <ProductTable products={PRODUCTS} /> */}
                </article>
                
            </div>
        );
    }
}

export const PRODUCTS = [
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'Macbook' },
    { category: 'Electronics', price: '$199.99', stocked: false, name: 'iPhone 13' },
    { category: 'Electronics', price: '$399.99', stocked: true, name: 'iPhone XR' }
];

export default FilterableProductTable;
