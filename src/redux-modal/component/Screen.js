import React, { Component } from 'react'
import ModalScreen from './Modal'
import showModalAction from '../action/showModal'
import { connect } from 'react-redux'
import { Modal, Button } from 'antd';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRendered: false
        }
        this.myRef = React.createRef()
    }
    changeElement(){
         this.myRef.current.style.background = "green" 
         this.myRef.current.style.width="100px"
         this.myRef.current.style.height="100px"

        
    }
    render() {
        const Element=(this.state.isRendered) ? "red": "green"
        return (
            <div>
                <button onClick ={this.changeElement.bind(this)}>oke</button>
                <div style={{ backgroundColor: "red", width: "40px", height: "40px" }} ref={this.myRef} ></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch(showModalAction()),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen)