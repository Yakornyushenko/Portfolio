import * as R from "ramda";

export const getPhoneById = (state, id) => state.phones[id]

export const getPhones = state => {
    const applySearch = item => R.includes(
         state.phonesPage.search,
         R.prop('name', item)
     )
    return state.phonesPage.search ? R.compose(
        R.filter(applySearch),
        R.map(id => getPhoneById(state, id))
    )(state.phonesPage.ids)
        : R.map(id => getPhoneById(state, id), state.phonesPage.ids)
}

export const getRenderPhonesLength = state => state.phonesPage.ids.length

// export const getTotalBasketCount = state => state.basket.length

export const getTotalPrice = state => {
    return R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.basket)
}

export const getBasketPhonesWithCount = state => {
    const phoneCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
    const uniqueIds = R.uniq(state.basket)

    return R.compose(
        R.map(phoneWithCount),
        R.map(id => getPhoneById(state, id))
    )(uniqueIds)
}