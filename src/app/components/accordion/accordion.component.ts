import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string[];
}

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() accordionItems: AccordionItem[] = [];
  @Input() currentPage: number = 1; // Recibir la página actual
  activeIndexes: { [page: number]: Set<number> } = {}; // Guardar abiertos por página

  toggleAccordion(index: number): void {
    if (!this.activeIndexes[this.currentPage]) {
      this.activeIndexes[this.currentPage] = new Set();
    }

    if (this.activeIndexes[this.currentPage].has(index)) {
      this.activeIndexes[this.currentPage].delete(index); // Si está abierto, ciérralo
    } else {
      this.activeIndexes[this.currentPage].add(index); // Si está cerrado, ábrelo
    }
  }

  isActive(index: number): boolean {
    return this.activeIndexes[this.currentPage]?.has(index) ?? false;
  }
}
