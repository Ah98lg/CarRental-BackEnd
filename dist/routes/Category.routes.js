"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRoutes = void 0;
const express_1 = require("express");
const uuid_1 = require("uuid");
const CategoriesRoutes = (0, express_1.Router)();
exports.CategoriesRoutes = CategoriesRoutes;
const categories = [];
CategoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const category = {
        name,
        id: (0, uuid_1.v4)(),
        description,
        created_at: new Date()
    };
    categories.push(category);
    return response.status(201).send();
});
