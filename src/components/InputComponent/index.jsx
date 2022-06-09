import React from "react";
import './style.scss';


class InputComponent extends React.Component {

    /**
     * 
     * @param {*
     *      style,
     *      label,
     *      value,
     *      onSave
     * } props 
     */

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        }
    }

    render() {
        return (<div className='hor-row input-type-container-main'
            style={this.props.style} >
                <input type = 'text' placeholder = { this.props.placeholder}/>


        </div>
        )
    }


}
export default InputComponent;
