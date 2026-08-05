import { Component, effect, inject, input, signal  } from '@angular/core';
import { FormSchema, FormField } from '../../../../core/models/form-schema.model';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { JsonPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    MatCardModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatDatepickerModule, 
    MatButtonModule,
    MatDividerModule,
    JsonPipe
  ],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss',
})
export class DynamicFormComponent  {
  private readonly fb = inject(FormBuilder);
  readonly schema = input.required<FormSchema>();
  readonly form = this.fb.group({});
  readonly isFormSubmitted = signal(false);

  constructor() {
    effect(() => {
      this.buildForm();
    });
  }

  private getAllFields(): FormField[] {
    return this.schema()
        .sections
        .flatMap(section => section.fields);
  }

  private buildForm() {
    const schema = this.schema();

    for (const section of schema.sections) {

        for (const field of section.fields) {

            this.form.addControl(
                field.id,
                this.createControl(field)
            );

        }

    }
  }

  private createControl(field: FormField): FormControl {
    return this.fb.control(
        field.defaultValue ?? null,
        this.buildValidators(field)
    );
  }

  private buildValidators(field: FormField) {
    const validators = [];

    if (field.validation?.required) {
        validators.push(Validators.required);
    }

    if (field.validation?.minLength !== undefined) {
        validators.push(Validators.minLength(field.validation.minLength));
    }

    if (field.validation?.maxLength !== undefined) {
        validators.push(Validators.maxLength(field.validation.maxLength));
    }

    if (field.validation?.min !== undefined) {
        validators.push(Validators.min(field.validation.min));
    }

    if (field.validation?.max !== undefined) {
        validators.push(Validators.max(field.validation.max));
    }

    if (field.validation?.pattern) {
        validators.push(Validators.pattern(field.validation.pattern));
    }

    return validators;
  }

  onSubmit() {
    if (this.form.valid) {
        console.log('Form submitted:', this.form.getRawValue());
        this.isFormSubmitted.set(true);
    } else {
        console.log('Form is invalid');
    }
  } 

  resetForm() {
    this.form.reset();
    this.isFormSubmitted.set(false);
  }

}
