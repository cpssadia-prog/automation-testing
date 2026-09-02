
import { test, expect } from '@playwright/test';
const Registerdata = {
  "fullname" : "sadia shaikh",
   "username": "sadia19",
   "email": "sadia@gmail.com",
   "password": "sadia19@"
}
const data = {
   "username": "sadia19",
   "email": "sadia@gmail.com",
   "password": "sadia19@"
}
// test('POST - Register a new User', async ({request}) => {
//     const response = await request.post(`https://api-testing-postman.vercel.app/api/v1/users/register`,
//         {
//         data: Registerdata 
//         }  
//     );
 
//     const responeBody = await response.json();
 
//     console.log('Status: ', response.status());
//     console.log('Response: ', responeBody);
 
//     expect(response.status()).toBe(201);
// });

test('Get All users API Test', async ({request}) => {
const response = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
    data: data
    }
);
console.log(await response.json());
expect(response.status()).toBe(200);
  const tokenData = await response.json();
  const token = tokenData.token;
 const GETResponse = await request.get(
    `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }

    }
  );
     console.log(GETResponse.status());

  expect(GETResponse.status()).toBe(200);

 const patchResponse = await request.patch(
   'https://api-testing-postman.vercel.app/api/v1/users/update-account',
   {
     headers: {
       Authorization: `Bearer ${token}`
     },
     data: {
       "fullname": "sadia shaikh",
       "email": "sadia19@gmail.com"
     }
   }
 );
 console.log('PATCH Response Status:', patchResponse.status());
 console.log('PATCH Response:', await patchResponse.json());
 expect(patchResponse.status()).toBe(200);

// const deleteResponse = await request.delete(
// 'https://api-testing-postman.vercel.app/api/v1/users/delete-account',
//    {
//      headers: {
//        Authorization: `Bearer ${token}`
//      }
//    }
//  );
//  console.log('DELETE Response Status:', deleteResponse.status());
//  console.log('DELETE Response:', await deleteResponse.json());
//  expect(deleteResponse.status()).toBe(200);
  });
//  });
/*import { test, expect } from '@playwright/test';

  const data ={ 
  "fullname": "sadia",
  "email": "sadia@gmail.com",
  "username": "sadia19",
  "password": "sadia19@"
 };

test('create User API Test', async ({ request }) => {
  const tokenResponse = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/register',
    {
      data: data
    }
  );
 console.log(await tokenResponse.json());
expect(tokenResponse.status()).toBe(201);

  const Responsee = await request.post(
    'https://api-testing-postman.vercel.app/api/v1/users/login',
    {
      data: {
   "username": "sadia19",
   "email": "sadia@gmail.com",
   "password": "sadia19@"
}
    }
  );
 console.log(await Responsee.json());
expect(Responsee.status()).toBe(200);

  const tokenData = await tokenResponse.json();
  const token = tokenData.token;
  //const userId = '6a9516f2271aa3474a4973b0';
  const GetResponse = await request.get(
    `https://api-testing-postman.vercel.app/api/v1/users/current-user`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
     console.log(GetResponse.status());
  expect(GetResponse.status()).toBe(200);
});*/