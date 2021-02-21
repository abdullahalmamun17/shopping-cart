// const addPhone = () => {
//     const phoneInput = document.getElementById('phone-input')
//     const phoneCount = parseInt(phoneInput.value)
//     const phoneNewCount = phoneCount + 1
//     phoneInput.value = phoneNewCount
//     document.getElementById('phone-price').innerText = phoneNewCount * 1299;
// }
// const minusPhone = () => {
//     const phoneInput = document.getElementById('phone-input')
//     const phoneCount = parseInt(phoneInput.value)
//     if (phoneCount > 0) {
//         phoneNewCount = phoneCount - 1
//         phoneInput.value = phoneNewCount
//         document.getElementById('phone-price').innerText = phoneNewCount * 1299;
//     }
// }

const handleProductChange = (product, changeStatus) => {
    const productCount = getInputValue(product)
    let productNewCount = productCount
    if (changeStatus === 'increase') {
        productNewCount = productCount + 1
    }
    if (changeStatus === 'decrease' && productCount > 0) {
        productNewCount = productCount - 1
    }
    document.getElementById(product + '-input').value = productNewCount
    if (product === 'phone') {
        document.getElementById(product + '-price').innerText = productNewCount * 1299;
    }
    if (product === 'case') {
        document.getElementById(product + '-price').innerText = productNewCount * 99;
    }
    calculateTotal()
}

const calculateTotal = () => {
    const phoneCount = getInputValue('phone')
    const caseCount = getInputValue('case')


    const subtotal = phoneCount * 1299 + caseCount * 99
    document.getElementById('subtotal-price').innerText = subtotal

    const tax = Math.round(subtotal * .15)
    document.getElementById('tax').innerText = tax

    const total = subtotal + tax
    document.getElementById('total-price').innerText = total

}

const getInputValue = product => {
    const productInput = document.getElementById(product + '-input')
    if (productInput === null) {
        return productCount = 0
    }
    else {
        const productCount = parseInt(productInput.value)
        return productCount
    }
}


const removeProduct = product => {
    const productNode = document.getElementById(product)
    productNode.parentNode.removeChild(productNode)
    calculateTotal()
}