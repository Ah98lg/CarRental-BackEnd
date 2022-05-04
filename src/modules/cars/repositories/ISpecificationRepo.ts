import { Specification } from "../model/Specification";

interface ISpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationRepo{
    create({name, description} : ISpecificationDTO) : void;
    list() : Specification[]
    findByName(name : string) : Specification
}

export {ISpecificationRepo, ISpecificationDTO}