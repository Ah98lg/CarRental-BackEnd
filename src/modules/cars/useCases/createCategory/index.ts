import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepo = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepo);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);


export { createCategoryController, categoryRepo }