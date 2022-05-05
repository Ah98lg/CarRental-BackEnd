import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";




class ListSpecificationUseCase {

    constructor(private specificationRepo : SpecificationRepository){}


    execute(){
        const specificationList = this.specificationRepo.list()

        return specificationList;
    }
}

export { ListSpecificationUseCase };