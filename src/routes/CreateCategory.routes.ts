import { Router } from "express";
import { v4 as uuidv4 } from 'uuid'
import { Request, Response } from 'express';

const CreateCategory = Router();

const categories = []

CreateCategory.post("/", (request : Request, response : Response) => {
    const {name, type} = request.body;

    const category = {
        name,
        id: uuidv4(),
        type,
        created_at: new Date()
    }

    categories.push(category)

    return response.status(201).json(category)
})

export { CreateCategory };