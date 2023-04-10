import React, {Component} from "react";
import {connect} from "react-redux";

import {addPhoneToBasket, fetchAllPhones, fetchPhone} from "../../actions";
import {getPhoneById} from "../../selectors";
import {Link} from "react-router-dom";
import GlobalLayout from "../layout/globalLayout/globalLayout";

class PhoneUnit extends Component {
    componentDidMount() {
        this.props.fetchAllPhones()
        this.props.fetchPhone(this.props.match.params.id);
    }

    renderFields() {
        const phone = this.props.phone
        const fields = {};
        Object.assign(fields, phone);
        delete fields.id;
        delete fields.categoryId;
        delete fields.image;
        delete fields.description;
        delete fields.price;
        const phoneFields = Object.entries(fields)

        return phoneFields.map(([key, value]) => (
                <div className='column' key={key}>
                    <div className='ab-details-title'>
                        <p>{key}</p>
                    </div>
                    <div className='ab-details-info'>
                        {value}
                    </div>
                </div>
        ))
    }

    renderContent() {
        const {phone} = this.props
        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-thumbnail'
                        src={phone.image}
                        alt={phone.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>{`$${phone.price}`}</h4>
                    <h4>{phone.name}</h4>
                    <h4>{phone.description}</h4>
                </div>
            </div>
        )
    }

    renderSidebar() {
        const {phone, addPhoneToBasket} = this.props
        return (
            <div>
                <p className='lead'> Quick shop</p>
                <div className='form-group'>
                    <h3>{phone.name}</h3>
                    <h4>Price ${phone.price}</h4>
                </div>
                <Link to='/' className='btn btn-info btn-block'>
                    Back to store
                </Link>
                <button
                    className='btn btn-success btn-block'
                    type='button'
                    onClick={() => addPhoneToBasket(phone.id)}
                >
                    Add to card
                </button>
            </div>
        )
    }

    render() {
        const {phone} = this.props
        console.log('phone', this.props.phone)
        return <GlobalLayout>
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        {phone && this.renderSidebar()}
                    </div>
                    <div className='col-md-9'>
                        {phone && this.renderContent()}
                    </div>
                </div>
            </div>
        </div>
        </GlobalLayout>
    }
}

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage)
    }
}

const mapDispatchToProps = {
    fetchPhone,
    fetchAllPhones,
    addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps) (PhoneUnit)