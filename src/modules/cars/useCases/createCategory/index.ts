import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepo = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepo);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);


export { createCategoryController, categoryRepo }