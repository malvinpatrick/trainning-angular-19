import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Skill {
  name: string;
  level: string;
  yearsOfExperience: number;
}

@Component({
  selector: 'app-dynamic-form-array',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-array.component.html',
  styleUrl: './dynamic-form-array.component.css'
})
export class DynamicFormArrayComponent implements OnInit {
  profileForm!: FormGroup;
  
  // Define skill level options
  skillLevels: string[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      skills: this.fb.array([])
    });
    
    // Add an empty skill form by default
    this.addSkill();
  }
  
  // Getter for easy access to form fields
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get skills() { return this.profileForm.get('skills') as FormArray; }
  
  // Create a new skill FormGroup
  createSkill(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      level: ['Beginner', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(0), Validators.max(50)]]
    });
  }
  
  // Add a new skill to the FormArray
  addSkill(): void {
    this.skills.push(this.createSkill());
  }
  
  // Remove a skill at specific index
  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }
  
  // Submit the form
  onSubmit(): void {
    if (this.profileForm.valid) {
      // In a real application, you would send this data to a server
      alert('Form successfully submitted!');
      this.profileForm.reset();
      this.skills.clear();
      this.addSkill(); // Add a default empty skill
    } else {
      // Mark all fields as touched to trigger validation display
      this.markFormGroupTouched(this.profileForm);
    }
  }
  
  // Helper method to mark all controls in a form group as touched
  markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
