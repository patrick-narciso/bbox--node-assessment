import { HttpResponse } from '../protocols';

export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
