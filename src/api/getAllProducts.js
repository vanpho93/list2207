const getAllProduct = async () => {
    const res = await fetch('http:localhost:3000/sanpham');
    const resJSON = await res.json();
    return resJSON;
}

export default getAllProduct;

// getAllProduct()
// .then(products => console.log(products))
// .catch(err => console.log(err.message));
