import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Productos from './Productos';
import CrearProducto from './CrearProducto';

export default class Navegacion extends Component {
    render() {
        return (
            <Router>
                <div className="container mt-3">
                    <div>
                        <div className="btn-group">
                            <Link to="/" className="btn btn-dark">Productos</Link>
                            <Link to="/crear-producto" className="btn btn-dark">Crear producto</Link>
                        </div>
                        <hr />
                    </div>  <Switch>
                        <Route exact path="/">
                            <Productos />
                        </Route>
                        <Route path="/crear-producto">
                            <CrearProducto />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}