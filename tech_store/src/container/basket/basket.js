import React from "react";
import {connect} from "react-redux";
import {getTotalPrice, getBasketPhonesWithCount} from "../../selectors";
import trash from './trash.png';
import emptyCart from './emptyCart.png';
import {removePhoneFromBasket, cleanBasket} from "../../actions";
import {Link} from "react-router-dom";
import GlobalLayout from "../layout/globalLayout/globalLayout";
const basket = ({
    phones,
    totalPrice,
    removePhoneFromBasket,
    cleanBasket,
}) => {
    const renderContent = () => (
        <div>
            {phones.length <= 0 ?
                <div className='empty-cart-info'>
                    <h3 className='empty-cart-title'>Your shopping cart is empty</h3>
                    <img className='empty-cart-img' src={emptyCart} alt=''/>
                </div>
                 : null}
            <div className='table-responsive'>
                <table className='table-bordered table-striped table-condensed cf'>
                    <tbody>
                    {phones.map((phone, index) => (
                        <tr key={index} className='item-checkout'>
                            <td className='first-column-checkout'>
                                <img
                                className='img-thumbnail'
                                src={phone.image}
                                alt={phone.name}
                                />
                            </td>
                            <td>{phone.name}</td>
                            <td>${phone.price}</td>
                            <td>{phone.count}</td>
                            <td>
                                <span
                                    className='delete-cart'
                                    onClick={() => removePhoneFromBasket(phone.id)}
                                >
                                    <img className='delete-img' src={trash}
                                    alt={phone.name}
                                    />
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            { phones.length > 0 ?
                <div className='row'>
                    <div className='pull-right total-user-checkout'>
                        <b>Total:</b>
                        ${totalPrice}
                    </div>
                </div>
                :  null
            }
        </div>
    )

    const renderSidebar = () => (
        <div>
            <Link
            to='/'
            className='btn btn-info glyphicon-shopping'
            >
                <span className='glyphicon glyphicon-info-sign'></span>
                <span>Continue shopping</span>
            </Link>
            {phones.length > 0 ?
                <div>
                    <button
                    onClick={cleanBasket}
                    className='btn btn-danger'
                    >
                        <span className='glyphicon glyphicon-trash glyphicon-clean-button'>
                            Clean
                        </span>
                    </button>
                </div>
                : null}
        </div>
    )

        return (
            <GlobalLayout>
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 btn-user-checkout'>
                            {renderSidebar()}
                        </div>
                        <div className='col-md-9'>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
            </GlobalLayout>
        )
}

const mapStateToProps = state => {
    return {
        phones: getBasketPhonesWithCount(state),
        totalPrice: getTotalPrice(state)
    }
}
const mapDispatchToProps = {
    removePhoneFromBasket,
    cleanBasket,
}

export default connect(mapStateToProps, mapDispatchToProps)(basket)