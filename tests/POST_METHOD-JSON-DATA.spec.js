  const {test, expect} = require('@playwright/test')
  const fs = require('fs');
  const path = require('path');

  test('should be able to create a new post', async ({request}) => {
    const url = "https://jsonplaceholder.typicode.com/posts"; 
    const dataFileLocation = path.resolve(__dirname, '../test-data/postContent.json');
    const postContent = JSON.parse(fs.readFileSync(dataFileLocation))
    const options = { 
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      data: postContent
    }
    // Send a POST request
    const response = await request.post(url, options);
    const responseBody = await response.json();
    
    // Print out the response
    console.log(response.status());
    console.log(responseBody);

    // verification
    expect(response.status()).toBe(201)
    const {title, body, userId, id} = responseBody;
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);
    expect(userId).toBe(postContent.userId);
    expect(id).toBeTruthy();
})