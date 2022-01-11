import React from "react";

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan='3'>
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
            <table className='Table'>
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
            <h3>
                <form>
                    <input className='Input' type='text' placeholder='Search...' />
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
                <article className='Main2'>
                    <ProductTable products={PRODUCTS} />
                </article>
                <aside className='Aside2 Aside-3'>3</aside>
                <aside className='Aside2 Aside-4'>4</aside>
            </div>
        );
    }
}

export const PRODUCTS = [
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'Macbook' },
    { category: 'Electronics', price: '$399.99', stocked: true, name: 'iPhone XR' },
    { category: 'Electronics', price: '$199.99', stocked: false, name: 'iPhone 13' }
];

export default FilterableProductTable;
