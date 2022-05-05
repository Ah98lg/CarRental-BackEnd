import { Category } from "../../model/Category";
import { ICategoryRepo, ICategoriesRepositoryDTO } from "../ICategoriesRepo";



class CategoriesRepository implements ICategoryRepo{

    private categories : Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor(){
        this.categories = []
    }

    public static getInstance() : CategoriesRepository{
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTANCE
    }

    create({name, description} : ICategoriesRepositoryDTO){
        const category = new Category()

        Object.assign(category,{
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    list() : Category[] {
        return(
        this.categories
        )
    }

    findByName(name : string) : Category {
        const alreadyExist = this.categories.find((category)=> category.name === name);
        return alreadyExist;
    }

}

export { CategoriesRepository }