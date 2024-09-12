export const axiosOptions = (url) => ({
    method: 'GET',
    url: url,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
});