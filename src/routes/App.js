import Home from "../pages/Home";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import DetalleProducto from '../pages/DetalleProducto';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/> 
                    <Route path='/product-detail/:id' component={DetalleProducto}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
 
export default App;
