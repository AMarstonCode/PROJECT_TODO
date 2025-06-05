// src/controllers/todoController.js
// eslint-disable-next-line no-undef
exports.getTodos = (req, res) => {
    const todos = [
        { id: 1, text: 'Learn Express.js', completed: false },
        { id: 2, text: 'Build a REST API', completed: true },
        { id: 3, text: 'Deploy to a server', completed: false }
    ];
    res.status(200).json(todos);
};
