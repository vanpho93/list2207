const getAllProduct = async () => {
    const res = await fetch('https://rn2207.herokuapp.com/sanpham');
    const resJSON = await res.json();
    return resJSON;
}

export default getAllProduct;

// getAllProduct()
// .then(products => console.log(products))
// .catch(err => console.log(err.message));
