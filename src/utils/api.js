// what is the endpoint/url for the getTodos api? "localhost:5000/api/todos/"
// Axios is a library that allows you to make HTTP requests from the browser
// Axios is asynchronous
import axios from "axios";

// http requests
// GET, POST, PUT, DELETE

const getTodos = async () => {
    try { 
        const response = await axios.get("http://localhost:5000/api/todos/");
        return response.data;
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

const createTodo = async (title, description = "", tags = []) => {
    try {
        const response = await axios.post("http://localhost:5000/api/todos/create", {
            title: title,
            description: description,
            tags: tags
        })
        return response.data;
    } catch (error) {
        console.error("Error creating todo:", error);
        throw error;
    }
}

// Tag API functions
const getTags = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/tags/");
        return response.data;
    } catch (error) {
        console.error("Error fetching tags:", error);
        throw error;
    }
}

const createTag = async (name, color = "#2196f3", description = "") => {
    try {
        const response = await axios.post("http://localhost:5000/api/tags/create", {
            name: name,
            color: color,
            description: description
        });
        return response.data;
    } catch (error) {
        console.error("Error creating tag:", error);
        throw error;
    }
}

// User API functions
const signupUser = async (name, email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/create", {
            name: name,
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

const loginUser = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/login", {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}

export { getTodos, createTodo, getTags, createTag, signupUser, loginUser };