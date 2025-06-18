const {test, expect} = require('@playwright/test');

test('Send PATCH request with verification', async ({request}) => {

    // Destrure data
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const postContent = {
        title: 'foo'
    }
    const options = {
        headers: {
    'Content-type': 'application/json; charset=UTF-8'
    },
    data: postContent
}
    // Send a Patch request
    const response = await request.patch(url, options);
    console.log(response.status());
    const bodyJson = await response.json();
    console.log(bodyJson);

    // Verification
    expect(response.status()).toBe(200);
    expect(bodyJson.title).toBe(postContent.title);

})







/*
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  */