import Checkbox from 'antd/lib/checkbox/Checkbox'
import React from 'react'
import "./handleForm.css"
export default class Form extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: "20px"  }}>
                <div >
                    <div style={{marginTop:"10px"}}>
                        <div>
                            <label style={{ fontWeight: 500 }}>Tên sản phẩm :</label>
                        </div>
                        <input ></input>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <div>
                            <label style={{ fontWeight: 500 }}>Giá :</label>
                        </div>
                        <input></input>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <div>
                            <label style={{ fontWeight: 500 }}>Trạng thái</label>
                        </div>
                        <Checkbox />
                        <span>Còn hàng</span>
                    </div>
                </div>
                <div style={{ paddingLeft: "10px" }}>
                    <button>Exit</button>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}