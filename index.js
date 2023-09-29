const express = require( 'express');
const uuid = require( 'uuid');

const port = 3001;
const app = express();
app.use(express.json());

const users = [];

const checkUserId = (request, response, next) => {
    const { id } = request.params;
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "User not found."});
    }

    next();
};

const logRequest = (request, response, next) => {
    console.log(`Method: ${request.method}, URL: ${request.url}`);
    next();
};

app.use(logRequest);

app.get('/order', (request, response) => {
    return response.json(users);
});

app.post('/order', (request, response) => {
    const { name, order, price } = request.body;

    const user = { id: uuid.v4(), name, order, price, status: "Em Preparação" };

    users.push(user);
    return response.status(201).json(user);
});

app.put('/order/:id', checkUserId, (request, response) => {
    const { id } = request.params;
    const { name, order, price } = request.body;

    const userIndex = users.findIndex(user => user.id === id);

    users[userIndex].status = "Pedido Atualizado";

    return response.json(users[userIndex]);
});

app.delete('/order/:id', checkUserId, (request, response) => {
    const { id } = request.params;

    const userIndex = users.findIndex(user => user.id === id);

    users.splice(userIndex, 1);

    return response.status(204).json();
});

app.get('/order/:id', checkUserId, (request, response) => {
    const { id } = request.params;

    const user = users.find(user => user.id === id);

    return response.json(user);
});

app.patch('/order/:id', checkUserId, (request, response) => {
    const { id } = request.params;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return response.status(404).json({ message: "User not found." });
    }

    users[userIndex].status = "Pedido Pronto";

    return response.json(users[userIndex]);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


















app.listen(port, () => {
    console.log(`Server started on ${port}`)
})