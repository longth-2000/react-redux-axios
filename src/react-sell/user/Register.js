import Password from 'antd/lib/input/Password';
import axiosClient from '../axios/axiosClient'
import { Link } from "react-router-dom";
import React from 'react'
import "./Register.css"
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            Users: [],
            check:true
        }
    }
    handleChange = () => {
        this.setState({
            username: document.getElementById("user-name").value,
            password: document.getElementById("password").value
        })
    }
    componentDidMount = () => {
        axiosClient(`users`, "GET", null).then(
            res => {
                this.setState({
                    Users: res.data
                })
            }
        )
    }
    checkAccount = () => {
        const { Users, username,check } = this.state
        Users.forEach((items) => {
            if (username != "" && items.username == username) {
                this.setState({
                    check:false
                })
            }
        })
        if (check) return false;
        else return true  
        
    }
    onSubmit = () => {
        console.log(this.checkAccount())
       /*  if (this.checkAccount()) {
            axiosClient(`users`, "POST", {
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                console.log(response.data);
                 this.props.history.push("/product") 
                alert("Đăng kí thành công")
            })
        }
        else {
            alert("Tài khoản đã tồn tại")
        } */

    }
    render() {  
        return (
            <div>
                <table >
                    <tr style={{ borderColor: "white" }}>
                        <td style={{ borderColor: "white" }}>
                            <label>Username</label>
                        </td>
                        <td style={{ borderColor: "white" }}>
                            <input type="text" onChange={this.handleChange} id="user-name"></input>
                        </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                        <td style={{ borderColor: "white" }}>
                            <label>Password</label>
                        </td>
                        <td style={{ borderColor: "white" }}>
                            <input type="password" onChange={this.handleChange} id="password"></input>
                        </td>
                    </tr>
                    <tr style={{ borderColor: "white" }}>
                        <td style={{ borderColor: "white" }}></td>
                        <td style={{ borderColor: "white" }}>
                            {/*  <Link to = "/">button</Link> */}
                            <button onClick={
                                () => this.onSubmit()
                            }>Register</button>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}