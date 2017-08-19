const addNewSinger = async (name, image) => {
    const url = 'http://localhost:3000/singer';
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, image})
    };
    const res = await fetch(url, options);
    const resJSON = await res.json();
    return;    
}

export default addNewSinger;
