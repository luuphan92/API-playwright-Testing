/* Create - Read - Update - Delete = CRUD > chuỗi của những request*/
const {test, expect} = require('@playwright/test');
test('Chaining request - should be able to perform CRUD on post type', async ({request}) => {
    // Create a post
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    // Construre data
    const postContent = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }

    const putContent = {
        id: 100,
        title: 'title đã update',
        body: 'body đã update',
        userId: 1,
      }

      const headers = {
        'Content-type': 'application/json; charset=UTF-8'
      }

      const postOptions = {
        headers : headers,
        data: postContent
      }

      const putOptions = {
        headers: headers,
        data: putContent
      }

    // Create a post (POST)
    const postRes = await request.post(`${baseUrl}/posts`, postOptions);
    const postJsonBody = await postRes.json();
    let postId = await postJsonBody.id; //101
    postId = Number(postId) - 1; //100
    // TODO: Vefification
    expect(postRes.status()).toBe(201);
    const {title, body, userId} = postJsonBody
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);
    expect(userId).toBeTruthy();

    // Read the detail (GET)
    const getRes = await request.get(`${baseUrl}/posts/${postId}`);
    // TODO: Vefification
    expect(getRes.status()).toBe(200);
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);
    expect(userId).toBeTruthy();



    // Update the post details (PUT/UPDATE)
    const putRes = await request.put(`${baseUrl}/posts/${postId}`, putOptions);  
    const putJsonBody = await putRes.json();
    // TODO: Vefification
    expect(putRes.status()).toBe(200);
    const {id: putId, title: putTitle, body: putBody, userId: putUserId} = putJsonBody;
    expect(putId).toBe(putContent.id);
    expect(putTitle).toBe(putContent.title);
    expect(putBody).toBe(putContent.body);
    expect(putUserId).toBe(putContent.userId);


    // Delete the post (DELETE)
    const deleteRes = await request.delete(`${baseUrl}/posts/${postId}`);
    // TODO: Vefification
    expect(deleteRes.status()).toBe(200);

});

/*
1. Contructure data
postContent > putConntent > headers > postOptions > putOptions 
2. Create a post
3. Read
4. Update
5. Delete
*/