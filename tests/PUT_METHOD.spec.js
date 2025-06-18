const {test, expect} = require('@playwright/test')
test('PUT request with verificationn', async ({request}) => {
  // Construct data
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const postContent = {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1,
}
const options = {
  headers: {
'Content-type': 'application/json; charset=UTF-8'
  },
  data: postContent
}
  // Send PUT request
const response = await request.put(url, options);
console.log(response.status());
const bodyJson = await response.json();
console.log(bodyJson);
const status = response.status();

  // Verification
expect(status).toBe(200);
const {id, title, body, userId} = bodyJson;
expect(status).toBe(200);
expect(id).toBe(postContent.id);
expect(title).toBe(postContent.title);
expect(body).toBe(postContent.body);
expect(userId).toBe(postContent.userId);
});

/*
Cài allure vào macos: brew install allure
Install allure-playwright: npm install -D allure-playwright
thêm config: ["allure-playwright"]
remove allure report: rm -rf allure-re*
tạo allure report: allure generate
mở: allure open
*/