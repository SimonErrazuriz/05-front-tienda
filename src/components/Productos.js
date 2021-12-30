import React, { Component } from 'react'
import axios from 'axios';

export default class Productos extends Component {

    state = {
        productos: []
    }

    componentDidMount() {
        this.getProductos();
    }

    async getProductos() {
        const res = await axios.get('https://test-mern-tienda.herokuapp.com/api/productos');
        this.setState({ productos: res.data });
    }

    async deleteProducto(id) {  
        if (window.confirm('¿Desea borrar el producto?') === true) {
            const res = await axios.delete('https://test-mern-tienda.herokuapp.com/api/eliminar-producto/' + id);
            console.log(res);
            this.getProductos();
        }
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
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={() => this.deleteProducto(producto._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                </svg>
                                            </button>
                                        </td>
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