const addNewSinger = async (name, image) => {
    const url = 'https://rn2207.herokuapp.com/singer';
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, image})
    };
    const res = await fetch(url, options);
    const resJSON = await res.text();
    return;    
}

export default addNewSinger;
