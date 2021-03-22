import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

// components
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
// redux
import { useDispatch, useSelector } from 'react-redux'
// actions that gets the api products
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList) // result of redux action
    const { loading, error, products } = productList // destructured and get loading, errors and products

    // onload palang pinaka nauuna si useEffect mag fire
    // galing sa action magmumula ang api request
    useEffect(() => {
       dispatch(listProducts()) 
    }, [dispatch]) // dependency lang ito

    return (
        <>
            <h1> Latest Products</h1>
            { 
                loading ?( 
                    <Loader />
                )
                : error ? (
                    <Message variant='danger'>{error}</Message>
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
