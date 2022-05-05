import { Category } from "../../model/Category";
import { ICategoryRepo } from "../../repositories/ICategoriesRepo";



class ListCategoryUseCase {

    constructor(private categories : ICategoryRepo){}

    execute() : Category[] {
        const listOfCategories = this.categories.list()

        return listOfCategories
    }
}

export { ListCategoryUseCase }