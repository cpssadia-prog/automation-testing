import { test } from '@playwright/test';

import { UserAPI } from '../Pages/userAPI.js';


// POST - Register
test('POST - Register a New User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    // Generate unique user
    userAPI.generateUser();

    // Register user
    await userAPI.registerUser();

});


// POST - Login
test('POST - Login User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    // Generate unique user
    userAPI.generateUser();

    // Register user first
    await userAPI.registerUser();

    // Login user
    await userAPI.loginUser();

});


// GET - Current User
test('GET - Current User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    // Generate unique user
    userAPI.generateUser();

    // Register user first
    await userAPI.registerUser();

    // Login to get access token
    await userAPI.loginUser();

    // Get current user
    await userAPI.getAllUsers();

});


// PUT - Replace User
test('PUT - Replace User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    // Generate unique user
    userAPI.generateUser();

    // Register user
    await userAPI.registerUser();

    // Login to get access token
    await userAPI.loginUser();

    // Replace user information
    await userAPI.replaceUser();

});


// PATCH - Update User
test('PATCH - Update User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    // Generate unique user
    userAPI.generateUser();

    // Register user
    await userAPI.registerUser();

    // Login to get access token
    await userAPI.loginUser();

    // Update user information
    await userAPI.patchUser();

});


// DELETE - Delete User
test('DELETE - Delete User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    // Generate unique user
    userAPI.generateUser();

    // Register user
    await userAPI.registerUser();

    // Login to get access token
    await userAPI.loginUser();

    // Delete user
    await userAPI.deleteUser();

});