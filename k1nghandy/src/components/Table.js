import React from "react";

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan='2'>
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{ color: 'red' }}>
                {product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table className='Main'>
                {/* <table> */}
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <div className='Header'>
                <form>
                    <input type='text' placeholder='Search...' />
                    <br></br>
                </form>
            </div>
        );
    }
}

class FilterableProductTable extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <SearchBar />
                </header>
                <article>
                    <ProductTable products={PRODUCTS} />
                </article>
                <aside className='Aside Aside-1' />
                <aside className='Aside Aside-2' />
                <footer className='Footer'></footer>
            </div>
        );
    }
}

export const PRODUCTS = [
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPad' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone XR' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'iPhone 13' }
];

export default FilterableProductTable;
