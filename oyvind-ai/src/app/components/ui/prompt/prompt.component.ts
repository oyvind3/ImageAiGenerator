import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-row items-center gap-3">
  <div class="flex-1 relative">
    <textarea
      [formControl]="form.controls.prompt"
      (keyup.enter)="onSubmit()"
      tabindex="0"
      data-id="root"
      placeholder="Send a message..."
      class="w-full p-2 rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white"
    ></textarea>
    <button
      class="absolute right-2 bottom-2 p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
      type="submit"
      [disabled]="form.invalid"
    >
      <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
      <span class="ml-0.5 text-xs font-medium">submit</span>
    </button>
  </div>
</form>
  `,
  styles: [
    `
      form {
        background-color: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        overflow: hidden;
        padding: 0.5rem;
        
      }

      textarea {
        height: 3rem;
        min-height: 3rem;
        resize: none;
        width: 100%;

      }

      button {
        background-color: #4299e1;
        border: 0;
        color: #e2e8f0;
        cursor: pointer;
        font-size: 0.65rem;
        font-weight: 800;
        padding: 0.25rem 0.5rem;
        transition: background-color 0.15s ease-in-out;
      }

      button:hover {
        background-color: #3182ce;
        
        
      }
    `,
  ],
})
export class PromptComponent {
  @Output() public readonly prompted = new EventEmitter<string>();

  public readonly form = new FormGroup({
    prompt: new FormControl<string | null>(null, [Validators.required]),
  });

  public onSubmit(): void {
    if (this.form.valid && this.form.value.prompt) {
      this.prompted.emit(this.form.value.prompt);
      this.form.reset();
    }
  }
}
