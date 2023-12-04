import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {
    let loginComponent: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule, StoreModule],
            providers:[
                provideMockStore({})
            ]
        });

        loginComponent = TestBed.createComponent(LoginComponent).componentInstance;
    });

    it('Should create login component', () => {
        expect(loginComponent).toBeTruthy();
    });

    it('Should mark all fields as touched if is invalid', () => {
        loginComponent.loginForm.patchValue({
            email: 'adasdasdadaqeq',
            password: '',
        });
        
        loginComponent.login();

        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    });

    it('Should call AuthService method if is valid', () => {
        loginComponent.loginForm.patchValue({
            email: 'admin@mail.com',
            password: '123456'
        });
        
        const spyOnAuthServiceLogin = spyOn((loginComponent as any).authService, 'login'); 

        loginComponent.login();

        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    })
}); 