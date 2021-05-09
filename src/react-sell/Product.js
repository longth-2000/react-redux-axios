import React from "react"
import "./Product.css"
import axiosClient from "./axios/axiosClient"
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }
    componentDidMount = () => {
        axiosClient('products', "GET", null).then(
            res => {
                this.setState({
                    product: res.data
                })
            }
        )
    }
    onDelete = (id) => {
        axiosClient(`products/${id}`, "DELETE", null).then(
            res => {
                var listFilter = this.state.product.filter((items) => items.id != id)
                this.setState ({
                    product:listFilter
                })
            }
        )
    }
    render() {
        var status = "";
        return (
            <div>
                <div>
                    <button id="insert">Thêm sản phẩm</button>
                </div>
                <div>
                    <table>
                        <caption>Danh sách sản phẩm</caption>
                        <tr>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                        {
                            this.state.product.map((items) =>
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.price}</td>
                                    <td>
                                        <div>
                                            {status = (items.status) ? "Còn hàng" : "Hết hàng"}
                                        </div>
                                    </td>
                                    <td>
                                        <button>Edit</button>
                                        <button onClick={
                                            () => this.onDelete(items.id)
                                        }>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                </div>

            </div>
        )
    }
}