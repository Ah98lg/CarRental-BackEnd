import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepo = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepo);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export { createSpecificationController }