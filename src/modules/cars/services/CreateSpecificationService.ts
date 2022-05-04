import { ICategoryRepo } from "../repositories/ICategoriesRepo";

interface ISpecificationService{
    name: string,
    description: string,
}


class CreateSpecificationService{

    constructor(private specificationRepository : ICategoryRepo){}

    execute({name, description} : ISpecificationService){
        const alreadyExist = this.specificationRepository.findByName(name)

    if(alreadyExist){
        throw new Error("This category already exist")
    }

    this.specificationRepository.create({name,description});
    }
}

export { CreateSpecificationService }