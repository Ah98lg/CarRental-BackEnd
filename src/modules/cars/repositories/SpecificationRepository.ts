import { Category } from "../model/Category";
import { Specification } from "../model/Specification";
import { ISpecificationDTO, ISpecificationRepo } from "./ISpecificationRepo";




class SpecificationRepository implements ISpecificationRepo{

    private specifications : Specification[]

    constructor(){
        this.specifications = []
    }

    findByName(name: string) : Specification{
        const descriptionName = this.specifications.find((specification) => specification.name === name);
        
        return descriptionName;
    }
    list() : Specification[]{
        return this.specifications
    }
    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }
    
}

export { SpecificationRepository }