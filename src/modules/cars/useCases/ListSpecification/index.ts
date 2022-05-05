import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";



const specificationRepo = SpecificationRepository.getInstance();

const specificationListUseCase = new ListSpecificationUseCase(specificationRepo);

const specificationListController = new ListSpecificationController(specificationListUseCase)

export { specificationListController }