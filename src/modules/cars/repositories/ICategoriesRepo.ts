import { Category } from "../model/Category";


interface ICategoriesRepositoryDTO{
    name: string,
    description: string,
}


interface ICategoryRepo {
    findByName(name : string) : Category,
    list() : Category[],
    create({name, description} : ICategoriesRepositoryDTO) : void
}

export { ICategoryRepo, ICategoriesRepositoryDTO }