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
                <input type = { this.props.type } 
                placeholder = { this.props.placeholder}
                value={this.props.value}
                id = { this.props.inputID }
                onChange={(event) => this.props.onChange(event.target.value)}
                onKeyPress={(event) => {
                    if (this.props.onSave && event.key === 'Enter') {
                        this.props.onSave();
                    }
                }}
                />


        </div>
        )
    }


}
export default InputComponent;
