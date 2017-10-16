// const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:7080'
//
// const headers = {
//     'Accept': 'application/json'
// };



export const operate = (payload) =>
    fetch('/api/operate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
