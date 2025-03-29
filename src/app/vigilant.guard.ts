import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';

export const vigilantGuard: CanActivateFn = (route, state) => {
  return true;
};
