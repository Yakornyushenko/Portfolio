import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchAllPhones, loadAllPhones, addPhoneToBasket, fetchCategories} from "../../actions";
import {getPhones} from "../../selectors";
import {Link} from "react-router-dom";
import Layout from "../layout/layout";
import GlobalLayout from "../layout/globalLayout/globalLayout";

class Phones extends Component {
    componentDidMount() {
        this.props.fetchAllPhones()
        this.props.fetchCategories()
    }
    renderPhone (phone, i) {
        const shortDescription = `${phone.description.slice(60)}...`;
        const {addPhoneToBasket} = this.props;
        return (
        <div className='col-md-4 col-lg-4, col-sm-4 book-list' key={i}>
            <div className='thumbnail'>
                <img className='img-thumbnail' src={phone.image} alt={phone.name}/>
                <div className='caption'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>
                        <Link to={`/phone/${phone.id}`}>
                            {phone.name}
                        </Link>
                    </h4>
                    <p>{shortDescription}</p>
                    <p className='itemButton'>
                        <button className='btn btn-primary'
                        onClick={() => addPhoneToBasket(phone.id)}>
                            Buy now!
                        </button>
                        <Link
                            to={`/phone/${phone.id}`}
                            className='btn btn-primary'>
                            More info
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        )
    }

    render() {
        const {phones, loadAllPhones} = this.props
        console.log('this.props', this.props)
        console.log('phones', phones)
        return (
            <GlobalLayout>
                <Layout>
                    <div className='books row'>
                        {phones.map((phone, i) => {return this.renderPhone(phone, i)})}
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <button
                                onClick={loadAllPhones}
                                className='pull-right btn btn-primary btn-load'
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                </Layout>
            </GlobalLayout>


        )
    }
}
const mapStateToProps = state => ({
    phones: getPhones(state)
})
const mapDispatchToProps = {
    fetchAllPhones,
    loadAllPhones,
    addPhoneToBasket,
    fetchCategories
}
export default connect(mapStateToProps, mapDispatchToProps)(Phones);