import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryControler";
import { ListCategoryUseCase } from "./ListCategoryUseCase";



const categoriesRepo = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepo);

const listCategoriesController = new ListCategoryController(listCategoriesUseCase);


export { listCategoriesController };