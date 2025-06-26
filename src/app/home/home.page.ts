import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon , IonInput, IonItem, IonList} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonInput, IonItem, IonList],
})
export class HomePage {
  loginForm: FormGroup;
  usernameLabel = 'Username';
  usernameNote = 'Enter your username';
  usernameError = '';
  isRegularInvalid = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
    });

    this.usernameControl.statusChanges.subscribe(() => {
      this.setUsernameError();
    });
  }

  get usernameControl(): AbstractControl {
    return this.loginForm.get('username')!;
  }

  private setUsernameError() {
    const control = this.usernameControl;
    if (control.touched && control.invalid) {
      if (control.errors?.['required']) {
        this.usernameError = 'Username is required';
      } else if (control.errors?.['minlength']) {
        this.usernameError = 'Username must be at least 3 characters';
      } else {
        this.usernameError = 'Invalid username';
      }
    } else {
      this.usernameError = '';
    }
  }

  validateRegularEmail(event: Event): void {
    const input = event.target as HTMLInputElement;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isRegularInvalid = !emailRegex.test(input.value);

    // Dynamically update `aria-invalid` attribute for <input>
    input.setAttribute('aria-invalid', this.isRegularInvalid.toString());
  }
}
