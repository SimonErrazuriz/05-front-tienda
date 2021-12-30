import React, { Component } from 'react'
import axios from 'axios';

export default class Productos extends Component {

    state = {
        productos: []
    }

    async componentDidMount() {
        const res = await axios.get('https://test-mern-tienda.herokuapp.com/api/productos');
        this.setState({ productos: res.data });
    }

    render() {
        return (
            <div className="row">

                <div className="container">
                    <h1>Listado de productos</h1>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.productos.map(producto =>
                                    <tr key={producto._id}>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.stock}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
