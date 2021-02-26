import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

// redux
import { useDispatch, useSelector } from 'react-redux'
// actions that gets the api products
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList) // result of redux action
    const { loading, error, products } = productList // destructured and get loading, errors and products

    // console.log([1, error])

    useEffect(() => {
       dispatch(listProducts())
    }, [dispatch]) // dependency lang ito

    return (
        <>
            <h1> Latest Products</h1>
            { 
                loading ?( 
                    <h2>Loading...</h2> 
                )
                : error ? (
                    <h3>{error}</h3>
                ) 
                : 
                (
                    <Row> 
                        {
                            products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} /> 
                                </Col>
                            ))
                        }           
                    </Row>
                )
            }
        </>
    )
}

export default HomeScreen
