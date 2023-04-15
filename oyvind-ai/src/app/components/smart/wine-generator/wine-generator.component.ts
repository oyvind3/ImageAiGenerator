import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "../../ui/gallery/gallery.component";
import { PromptComponent } from "../../ui/prompt/prompt.component";
import { BehaviorSubject, combineLatest, map, of, switchMap } from 'rxjs';
import { WineGeneratorService } from 'src/app/data-access/wine-generator.service';

@Component({
  selector: 'app-wine-generator',
  standalone: true,
  template: `
    <div *ngIf="vm$ | async as vm" class="container">
      <app-prompt (prompted)="prompted($event)"></app-prompt>

      <p *ngIf="vm.prompt" class="mt-4 text-xl text-center">Requesting wines from: {{ vm.prompt }}</p>

      <app-gallery [wines]="vm.wines"></app-gallery>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

    `,
  ],
  imports: [CommonModule, GalleryComponent, PromptComponent],
})
export class WineGeneratorComponent {
  private readonly wineGenerator = inject(WineGeneratorService);

  private readonly prompt$$ = new BehaviorSubject<string>('');
  private readonly prompt$ = this.prompt$$.asObservable();

  private readonly wines$ = this.prompt$.pipe(
    switchMap((value) => {
      if (!value) {
        return of([]);
      }

      return this.wineGenerator.getWines(value, 3);
    })
  );

  public readonly vm$ = combineLatest([this.prompt$, this.wines$]).pipe(
    map(([prompt, wines]) => ({
      prompt,
      wines,
    }))
  );

  public prompted(value: string): void {
    this.prompt$$.next(value);
    console.log(value);
  }
}
