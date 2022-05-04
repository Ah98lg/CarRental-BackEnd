import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { categoryRepo, createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request,response) =>{
    const allCategories = categoryRepo.list()

    return response.json(allCategories)
})

export { categoriesRoutes };