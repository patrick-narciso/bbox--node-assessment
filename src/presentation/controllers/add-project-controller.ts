import { Controller, HttpResponse, Validation } from '../../presentation/protocols';
import { badRequest, serverError, noContent } from '../../presentation/helpers';
import { AddProject } from '../../domain/usecases';

export class AddProjectController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly AddProject: AddProject
  ) {}

  async handle (request: AddProjectController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.AddProject.add({
        ...request,
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddProjectController {
  export type Request = {
    userId: string;
    description: string;
  }
}