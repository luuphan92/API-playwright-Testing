const { test, expect} = require("@playwright/test")

test('should be able to send a GET method request', async({request}) => {
  // Send GET request
let response = await request.fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "get"  
})
// Extract response data
const status = response.status();
const jsonResponse = await response.json();
const firstPost = jsonResponse[0];


//Verification
expect(status).toBe(200);
expect(jsonResponse.length).toBeGreaterThan(1)
// destructure kỹ thuật
const {userId, id, title, body} = firstPost
expect(firstPost.userId).toBe(1)
expect(firstPost.id).toBe(1)
expect(title).toBeTruthy()
expect(body).toBeTruthy()
});