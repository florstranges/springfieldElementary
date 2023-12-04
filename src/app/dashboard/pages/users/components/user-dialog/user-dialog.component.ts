import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './user-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<UsersDialogComponent>,
    private usersService: UsersService,
    //Recibo la informacion para editar el modal
    @Inject(MAT_DIALOG_DATA) public userId?:number,
    ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
      access: ['', Validators.required],
      job: ['', Validators.required],
      password:['', Validators.required],
      token: ['', Validators.required]
    });

    if (userId){
      this.usersService.getUserById$(userId).subscribe({
        next: (c) => {
          if (c) {
            this.userForm.patchValue(c)
          }
        }
      })
    }
  }

  public get isEditing(): boolean{
    return !!this.userId
  }
  
  onSubmit(): void{
    if (this.userForm.invalid){
      this.userForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
