const {test, expect} = require('@playwright/test')
test ('DELETE method', async ({request}) => {
    // Construct data
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Send DELETE request
    const response = await request.delete(url);

    console.log(response.status());
    const bodyJson = await response.json();
    console.log(bodyJson);
    // Verification
    expect(response.status()).toBe(200);

})