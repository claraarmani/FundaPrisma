import { Router } from 'express';
import { prisma } from '../libs/prisma'
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
    name: 'John Doe',
    email: 'john.doe@exemple.com'
});
    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400).json({ error:'Email alredy exists' })
    }
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
        { name: 'Alice Smith', email: 'alice@exemple.com' },
        { name: 'Bob Johnson', email: 'bob.johnson@exemple.com' },
        { name: 'Charlie Brown', email: 'charlie.brown@exemple.com' },
        { name: 'David Wilson', email: 'david.wilson@exemple.com' },
    ])
    if (result) {
        res.status(201).json({ ok: true})
    } else {
        res.status(400).json({ error: 'Error creating users' })
    }
    
})