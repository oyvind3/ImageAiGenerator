import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-header">
    </div>
    <div class="gallery-grid">
      <div *ngFor="let wine of wines" class="gallery-item">
        <img [src]="wine" alt="Wine Image" class="gallery-image"/>
        <div class="gallery-overlay">
          <a [href]="wine" download="image.jpg" target="_blank" class="download-link">
            <i class="fa fa-download"></i>
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
    <div class="gallery-loading">
      <div class="spinner"></div>
    </div>
  `,
  styles: [
    `
    .gallery-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .gallery-header h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .gallery-header p {
      font-size: 1.2rem;
      color: #666;
    }

    .gallery-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }

    .gallery-item {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;
    }

    .gallery-item:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.2s ease;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 0.8;
    }

    .download-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      color: #333;
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .download-link:hover {
      background-color: #333;
      color: #fff;

    }
  `	
  ]
})
export class GalleryComponent {
  @Input() wines: string[] = [];
}
