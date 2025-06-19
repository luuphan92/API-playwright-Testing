# Test info

- Name: DELETE method
- Location: /Users/luuphan/my-js-project/my-playwright-project/tests/DELETE_METHOD.spec.js:2:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
    at /Users/luuphan/my-js-project/my-playwright-project/tests/DELETE_METHOD.spec.js:13:29
```

# Test source

```ts
   1 | const {test, expect} = require('@playwright/test')
   2 | test ('DELETE method', async ({request}) => {
   3 |     // Construct data
   4 |     const url = 'https://jsonplaceholder.typicode.com/posts/1';
   5 |
   6 |     // Send DELETE request
   7 |     const response = await request.delete(url);
   8 |
   9 |     console.log(response.status());
  10 |     const bodyJson = await response.json();
  11 |     console.log(bodyJson);
  12 |     // Verification
> 13 |     expect(response.status).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  14 |
  15 | })
```