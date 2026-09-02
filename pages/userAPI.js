import { expect } from '@playwright/test';
import userData from '../testdata/userData.json' with { type: 'json' };

export class UserAPI {

    constructor(request) {
        this.request = request;
        this.BASE_URL = 'https://api-testing-postman.vercel.app/api/v1';
        this.token = '';
        this.user = {};
    }

    // Generate unique user
    generateUser() {
        const time = Date.now();

        this.user = {
            fullname: userData.registerUser.fullname,
            email: `sadia_${time}@test.com`,
            username: `sadia_${time}`,
            password: userData.registerUser.password
        };
    }

    // POST - Register
    async registerUser() {
        const response = await this.request.post(
            `${this.BASE_URL}/users/register`,
            {
                data: this.user
            }
        );

        console.log('Register:', response.status());

        expect(response.status()).toBe(201);
    }

    // POST - Login
    async loginUser() {
        const response = await this.request.post(
            `${this.BASE_URL}/users/login`,
            {
                data: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );

        const data = await response.json();

        console.log('Login:', response.status());

        expect(response.status()).toBe(200);

        // Save token
        this.token = data.data.accessToken;
    }

    // GET - Current User
    async getAllUsers() {

        // If there is no token, register and login first
        if (!this.token) {
            this.generateUser();
            await this.registerUser();
            await this.loginUser();
        }

        const response = await this.request.get(
            `${this.BASE_URL}/users/current-user`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
        );

        console.log('GET:', response.status());

        expect(response.status()).toBe(200);
    }

    // PUT - Replace User
    async replaceUser() {

        const time = Date.now();

        const response = await this.request.put(
            `${this.BASE_URL}/users/replace-account`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },

                data: {
                    fullname: userData.putUser.fullname,
                    email: `sadia_updated_${time}@test.com`,
                    username: `sadia_updated_${time}`
                }
            }
        );

        console.log('PUT:', response.status());

        expect(response.status()).toBe(200);
    }

    // PATCH - Update User
    async patchUser() {

        const time = Date.now();

        const response = await this.request.patch(
            `${this.BASE_URL}/users/update-account`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },

                data: {
                    fullname: userData.patchUser.fullname,
                    email: `sadia_patch_${time}@test.com`
                }
            }
        );

        console.log('PATCH:', response.status());

        expect(response.status()).toBe(200);
    }

    // DELETE - Delete User
    async deleteUser() {

        const response = await this.request.delete(
            `${this.BASE_URL}/users/delete-account`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
        );

        console.log('DELETE:', response.status());

        expect(response.status()).toBe(200);
    }
}