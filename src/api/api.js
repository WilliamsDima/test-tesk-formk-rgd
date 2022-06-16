export const sendUsers = async (users) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(users)
    };
    const response = await fetch('https://webhook.site/0ef1e578-476a-4cba-a0e7-6574914998ed', requestOptions);
    console.log(response);
};