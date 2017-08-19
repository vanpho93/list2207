const getAllSingers = async () => {
    const res = await fetch('http:localhost:3000/singer/0');
    const resJSON = await res.json();
    return resJSON;
}

export default getAllSingers;
