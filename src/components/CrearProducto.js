import React, { Component } from 'react'
import axios from 'axios'

export default class CrearProducto extends Component {

    state = {
        nombre: '',
        marca: '',
        precio: '',
        categoria: '',
        stock: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const producto = {
            nombre: this.state.nombre,
            marca: this.state.marca,
            precio: this.state.precio,
            categoria: this.state.categoria,
            stock: this.state.stock,
        };
        await axios.post('https://test-mern-tienda.herokuapp.com/api/crear-producto', producto);
        window.location.href = '/';
    }

    render() {
        return (
            <div className="card">
                <h5 className="card-header">Crear producto</h5>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name="nombre" onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marca" className="form-label">Marca</label>
                            <input type="text" className="form-control" id="marca" name="marca" onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="number" className="form-control" id="precio" name="precio" onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoria" className="form-label">Categoria</label>
                            <input type="text" className="form-control" id="categoria" name="categoria" onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="stock" className="form-label">Stock</label>
                            <input type="number" className="form-control" id="stock" name="stock" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </form>
                </div>
            </div>
        )
    }
}