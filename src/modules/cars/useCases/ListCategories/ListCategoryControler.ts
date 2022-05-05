import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";



class ListCategoryController{

    constructor(private listCategoryUseCase : ListCategoryUseCase){}

    handle(request : Request, response : Response){
        const listOfCategories = this.listCategoryUseCase.execute()

        return response.status(200).json(listOfCategories)
    }
}

export { ListCategoryController }