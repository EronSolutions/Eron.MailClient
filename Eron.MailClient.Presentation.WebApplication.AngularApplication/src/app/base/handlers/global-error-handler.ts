import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    // console.log(error);
    // do something with the exception
    throw(error);
  }
}
