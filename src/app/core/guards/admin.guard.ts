import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import Swal from 'sweetalert2';

export const adminGuard: CanActivateFn = (route, state) => {

  const store = inject(Store);
  const router = inject(Router);
  

  return store.select(selectAuthUser)
    .pipe(map((usuario) => {
      if (usuario?.access !== 'Admin'){
        Swal.fire({
          icon: 'error',
          title: 'Navegación cancelada',
          text: 'No tienes permiso para acceder a esta página.',
        })
        return router.createUrlTree(['/dashboard/home'])
      } else{
        return true
      }
    }));
};
