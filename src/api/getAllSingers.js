const getSingersByMaxId = async (maxId) => {
    const res = await fetch('https://rn2207.herokuapp.com/singer/' + maxId);
    const resJSON = await res.json();
    return resJSON;
}

export default getSingersByMaxId;
