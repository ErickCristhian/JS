import React, { useState, useEffect } from "react";
import ProductImage from '../../img/teste.png';
import './style.css'

function Products() {
    const [products, setProducts] = useState([])
    
    useEffect(async () => {
        await fetch('https://products-perssonal.herokuapp.com/')
        .then(res => res.json())
        .then(function(data){
            setProducts(data)
        })
    }, [])
    return(
        <>
            { products?.map(product => (
                <div className="d-flex flex-column justify-content-center shelf-items p-5">
                    <div className="shelf-item d-flex flex-column justify-content-center">
                        <h4 className="text-center">{product.name}</h4>
                        <img src={ProductImage} />
                        <p className="text-center">Sobre: {product.description}</p>
                        <span className="mb-3 text-center">R$ {product.price.toFixed(2)}</span>
                    </div>
                    <div className="shelf-action pb-2">
                        <button className="w-100">Adicionar ao carrinho</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Products;