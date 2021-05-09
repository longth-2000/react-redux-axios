import Password from 'antd/lib/input/Password';
import axiosClient from '../axios/axiosClient'
import React from 'react'
import "./Register.css"
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {
                username:"",
                password:""
            },
            Users: [],
            check: false
        }
    }
    handleChange = () => {
        this.setState({
            user : {
                username: document.getElementById("user-name").value,
                password:document.getElementById("password").value
            }
        })
    }
    onLogin = () => {
        axiosClient(`users`, "GET", null).then(
            res => {
                this.setState(
                    {
                        Users: res.data
                    }
                )
                this.checkValid(this.state.Users, this.state.user)
            }
        )
    }
    checkValid = (array, user) => {
        array.forEach(element => {
            if (element.username == user.username && element.password == user.password) {
                this.setState({
                    check: true
                })
            }
        });
        if (this.state.check == true)  this.props.history.push("./register")
        else alert("Đăng nhập thất bại")
       
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
                            <button onClick={
                                () => this.onLogin()
                            }>Login</button>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}