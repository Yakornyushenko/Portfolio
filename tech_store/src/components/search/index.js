import React, {Component} from "react";
import {connect} from "react-redux";
import {searchPhone, resetSearchPhone} from "../../actions";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disabled: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            disabled: false
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchPhone(this.state.value)
    }

    render() {
        const {resetSearchPhone} = this.props;
        const input = document.getElementById("input")
     return (
         <div className='well blosd'>
         <h3 className='lead'>Quick shop</h3>
             <div className='input group'>
                 <form className='search-form' onSubmit={this.handleSubmit}>
                     <input
                        id='input'
                        onChange={this.handleChange}
                        type='text'
                        className='form-control search-input'
                     />
                     <span className='input-group-btn wrap-search-btn'>
                     <button className='btn btn-default search-btn'>
                         <span className='glyphicon glyphicon-search'></span>
                     </button>
                 </span>
                 </form>
                 <button
                     onClick={() => {
                             resetSearchPhone(this.state.value)
                             input.value = ''
                         this.setState({
                             disabled: true
                         })
                     }}
                     disabled={this.state.disabled}
                     className='pull-right btn btn-primary btn-load reset-search-btn'>
                     <span>Reset search</span>
                 </button>
             </div>
         </div>
     )
    }
}
const MapDispatchToProps = {
    searchPhone,
    resetSearchPhone
}

export default connect(null, MapDispatchToProps)(Search)