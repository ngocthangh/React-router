import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import Product from './Product';

const products = [
    {
        id: 1,
        slug: 'iphone',
        name: 'Iphone xs',
        price: 56000
    },
    {
        id: 2,
        slug: 'oppo',
        name: 'Oppo f1s',
        price: 23000
    },{
        id: 3,
        slug: 'samsung',
        name: 'Samsung galaxy',
        price: 45000
    }
];


class Products extends Component {
    render() {
        var {match} = this.props;
        // console.log(match);
        var url = match.url;
        var productElm = products.map((product, index) => (
            <NavLink to={`${url}/${product.slug}`} key={index}>
                <li className="list-group-item">{product.id} - {product.name} - {product.price}</li>
            </NavLink>
        ))
        var {location} = this.props;
        console.log(location);
        return (
            <div className='container'>
                
                <div className="row">
                    
                    <ul className="list-group">
                        {productElm}
                    </ul>
                    
                </div>
                
                <div className="row">
                    <Route path='/products/:slug' component={Product}/>
                </div>
                
            </div>
        );
    }
}

export default Products;