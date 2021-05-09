import React, { Component } from 'react'
import "./Product.css"
import axiosClient from "./axiosClient"
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            id: "",
            displayEdit: "none",
            displayInsert:"none",
            name: "",
            price: "",
            onject: {}

        }
    }
    componentDidMount = () => {
        axiosClient('products', "GET", null).then(res => {
            this.setState({
                list: res.data
            })
        })
    }
    onInsert = () => {
        axiosClient(`products`,"POST", {
            name: this.state.name,
            price:this.state.price
        }).then(res => {
            this.state.list.push(res.data) 
             this.setState({
                 list:this.state.list
             })
        })
    }

    onEdit = (id) => {
        axiosClient(`products/${id}`, "PUT", {
            name: this.state.name,
            price: this.state.price
        }).then(res => {
            var listFilter = this.state.list.filter((items) => {
                return items.id != id
            })
           listFilter.splice(0, 0 , res.data)
           this.setState ({
               list:listFilter
           })

        })

    }
    onDelete = (id) => {
        axiosClient(`products/${id}`, "DELETE", null).then(
            res => {
                var listFilter = this.state.list.filter((items) => {
                    return items.id != id
                })
                this.setState({
                    list: listFilter
                })
            }
        )
    }
    showEditForm = () => {
        this.setState({
            displayEdit: "block"
        })
    }
    showInsertForm = () => {
        this.setState({
            displayInsert:"block"
        })
    }
    handleChange = () => {
        this.setState({
            name: document.getElementById("nameInsert").value,
            price: document.getElementById("priceInsert").value
        })
    }
    handleChange1 = () => {
        this.setState({
            name: document.getElementById("name").value,
            price: document.getElementById("price").value
        })
    }
    render() {
        return (
            <div>
                <button style={{ backgroundColor: "#FF6666" }} onClick = {() => this.showInsertForm()}>Thêm</button>
                <table >
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Hành động</th>
                    </tr>
                    {
                        this.state.list.map((items) =>
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.price}</td>

                                <td>

                                    <button style={{ backgroundColor: "#FF9933" }} id="edit_button"
                                        onClick={
                                            () => {
                                                this.showEditForm();
                                                this.setState({
                                                    id: items.id
                                                })
                                            }
                                        }>Sửa</button>
                                    <button style={{ backgroundColor: "#00CC66" }}
                                        onClick={
                                            () => this.onDelete(items.id)
                                        }
                                    >Xóa</button>
                                </td>
                            </tr>
                        )
                    }
                    <div style={{ display: this.state.displayEdit }}>
                        <div>
                            <label>Name</label>
                            <input type="text" id="name" onChange={this.handleChange1} />
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" id="price" onChange={this.handleChange1} />
                        </div>
                        <button onClick={() => this.onEdit(this.state.id)}  >oke</button>
                    </div>
                    <div style={{ display: this.state.displayInsert }}>
                        <div>
                            <label>Name</label>
                            <input type="text" id="nameInsert" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" id="priceInsert" onChange={this.handleChange} />
                        </div>
                        <button onClick={() => this.onInsert()}  >oke</button>
                    </div>
                </table>
            </div>
        )
    }
}
