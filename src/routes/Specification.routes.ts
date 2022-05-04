import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";


const specificationRoutes = Router();

const specificationsRepository = new SpecificationRepository()



specificationRoutes.post("/", (request, response) => {
    const {name, description} = request.body

    const specification = new CreateSpecificationService(specificationsRepository)

    specification.execute({name, description})

    return response.status(201).send()
})

specificationRoutes.get("/", (request,response) =>{
    const allSpecifications = specificationsRepository.list()

    return response.json(allSpecifications)
})


export { specificationRoutes }