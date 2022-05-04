import { ICategoryRepo } from "../../repositories/ICategoriesRepo";

interface ICategoryService{
    name: string,
    description: string,
}


class CreateCategoryUseCase{

    constructor(private categoriesRepository : ICategoryRepo){}

    execute({name, description} : ICategoryService){
        const alreadyExist = this.categoriesRepository.findByName(name)

    if(alreadyExist){
        throw new Error("This category already exist")
    }

    this.categoriesRepository.create({name,description});
    }
}

export { CreateCategoryUseCase }