import { FormGroup, AbstractControl } from '@angular/forms';

export function touchAllControl(form: FormGroup) {
  Object.keys(form.controls).forEach((field) => {
    const control = form.get(field);
    if (control instanceof FormGroup) {
      touchAllControl(control);
    } else {
      control?.markAsTouched({ onlySelf: true });
    }
  });
  form.updateValueAndValidity();
}

export function isControlError(form: FormGroup, controlName: string): boolean {
  const control = form.get(controlName);

  if (control) {
    return control.invalid && (control.dirty || control.touched);
  }

  return true;
}
