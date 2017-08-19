const getSingersByMaxId = async (maxId) => {
    const res = await fetch('http:localhost:3000/singer/' + maxId);
    const resJSON = await res.json();
    return resJSON;
}

export default getSingersByMaxId;
