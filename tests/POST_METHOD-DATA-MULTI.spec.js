  const {test, expect} = require('@playwright/test')
  const postContent = require('../test-data/postContent.json')
  const multiPostContent = require('../test-data/postContentMulti.json')

//   test('should be able to create a new post', async ({request}) => {
//     const url = "https://jsonplaceholder.typicode.com/posts"; 
//     /*
//     const postContent = {
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     };
//       */
//     const options = { 
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       },
//       data: postContent
//     }
//     // Send a POST request
//     const response = await request.post(url, options);
//     const responseBody = await response.json();
    
//     // Print out the response
//     console.log(response.status());
//     console.log(responseBody);

//     // verification
//     expect(response.status()).toBe(201)
//     const {title, body, userId, id} = responseBody;
//     expect(title).toBe(postContent.title);
//     expect(body).toBe(postContent.body);
//     expect(userId).toBe(postContent.userId);
//     expect(id).toBeTruthy();
// })

test('should be able to create multi post', async ({request}) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
for (const postContent of multiPostContent) {
  console.log(postContent);
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
}
})