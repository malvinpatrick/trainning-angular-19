import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-forms',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
    // Template-driven form model using signals with default values
    templateUser = {
        name: signal(''),
        email: signal(''),
        phone: signal('')
    };

    // Default values for template form
    templateDefaults = {
        name: '',
        email: '',
        phone: ''
    };

    // Flags for form submission
    templateSubmitted = signal(false);

    // Reactive form
    reactiveForm!: FormGroup;

    // Flag for reactive form submission
    reactiveSubmitted = false;

    constructor(private fb: NonNullableFormBuilder) {}

    ngOnInit() {
        // Initialize reactive form with default values using NonNullableFormBuilder
        this.reactiveForm = new FormGroup({
            name: new FormControl('Default Name', {
                validators: [Validators.required, Validators.minLength(3)],
                nonNullable: true
            }),
            email: new FormControl('default@example.com', {
                validators: [Validators.required, Validators.email],
                nonNullable: true
            }),
            phone: new FormControl('', {
                validators: [Validators.required, Validators.pattern(/^\d{10}$/)],
                nonNullable: true
            })
        });
    }

    // Template-driven form submission
    onTemplateSubmit(form: NgForm) {
        this.templateSubmitted.set(true);
        if (form.valid) {
            const result = {
                name: this.templateUser.name(),
                email: this.templateUser.email(),
                phone: this.templateUser.phone()
            };
            console.log('Template form submitted:', result);

            // Reset form after successful submission
            form.resetForm(this.templateDefaults);
            
            // Reset signals to default values
            this.templateUser.name.set(this.templateDefaults.name);
            this.templateUser.email.set(this.templateDefaults.email);
            this.templateUser.phone.set(this.templateDefaults.phone);
            this.templateSubmitted.set(false);
        }
    }

    // Reactive form submission
    onReactiveSubmit() {
        this.reactiveSubmitted = true;
        if (this.reactiveForm.valid) {
            console.log('Reactive form submitted:', this.reactiveForm.value);
            
            // Reset form after successful submission
            this.resetReactiveForm();
            this.reactiveSubmitted = false;
        }
    }

    // Method to reset reactive form
    resetReactiveForm() {
        this.reactiveForm.reset();
    }

    // Method to set all values at once
    setFormValues() {
        this.reactiveForm.setValue({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890'
        });
    }

    // Helper methods for reactive form validation
    get rf() {
        return this.reactiveForm.controls;
    }
}
