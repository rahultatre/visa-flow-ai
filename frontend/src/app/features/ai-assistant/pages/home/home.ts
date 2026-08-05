import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormSchema } from '../../../../core/models/form-schema.model';
import { AiService } from '../../../../core/services/ai.service';
import { DynamicFormComponent } from '../../../dynamic-form/components/dynamic-form/dynamic-form';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    DynamicFormComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class AiAssistantHomeComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly aiService = inject(AiService);

  readonly promptForm = this.formBuilder.nonNullable.group({
    businessRequirement: ['', Validators.required],
  });

  readonly schema = signal<FormSchema | null>(null);
  readonly isLoading = signal(false);
  readonly hasSchema = computed(() => this.schema() !== null);
  readonly examplePrompts = [
    'Generate an H1B Beneficiary Information form',
    'Generate an H1B Petitioner Information form',
    'Generate a Passport and Travel History form',
    'Generate an Employee Onboarding form',
  ];

  readonly canGenerate = computed(() =>
    this.promptForm.valid && !this.isLoading()
  );

  generate() {
    if (!this.canGenerate()) {
      return;
    } 

    this.aiService.generateSchema({
      prompt: this.promptForm.get('businessRequirement')?.value || '',
    }).subscribe((response) => { 
      this.schema.set(response.data);
    });

  }

  useExamplePrompt(prompt: string) {
    this.promptForm.controls.businessRequirement.setValue(prompt);
  }
  
}
