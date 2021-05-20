import { HttpResponse } from '../protocols'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
