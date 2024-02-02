const search = async(business) => {
    const url = `https://local-business-data.p.rapidapi.com/search?query=${business}&limit=5&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8608917c9emsh7f5e6b12a812d15p1f34cbjsnbb86019cb253',
            'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data
        console.log('$$Result => ', result);
    } catch (error) {
        console.error(error);
    }
}
