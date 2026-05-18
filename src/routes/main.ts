import { Router } from 'express';
import { 
    createUser,
    createUsers,
    getAllUsers,
    getUserByEmail 
    } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
    name: 'Wild Bill',
    email: 'wild.bill@exemple.com',
    posts: {
        create: {
            title: 'Post 1 - Will Bill',
            content: 'Content of post 1 - Will Bill'
        }
    }
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

mainRouter.get('/users', async (req, res) => {
    const users = await getAllUsers()
    if (users) {
        res.json({ users })
    } else {
        res.status(500).json({ error: 'Error fetching users'})
    }
})

mainRouter.get('/user', async (req, res) => {
    const user = await getUserByEmail('charlie.brown@exemple.com')
    if (user) {
        res.json({ user })
    } else {
        res.status(404).json({ error: 'User not found' })
    }
})
