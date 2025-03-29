import { Component } from '@angular/core';
import { AccordionComponent } from '../../accordion/accordion.component';

@Component({
  selector: 'app-welcome-dash',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './welcome-dash.component.html',
  styleUrl: './welcome-dash.component.scss',
})
export class WelcomeDashComponent {
  private allData = this.generateAccordionData(); // Todos los datos
  currentPage = 1;
  itemsPerPage = 10; 
  totalPages = Math.ceil(this.allData.length / this.itemsPerPage);

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.allData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  private generateAccordionData() {
    const data = [];
    const today = new Date();

    for (let i = 0; i < 100; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const formattedDate = this.formatDate(date);

      data.push({ title: formattedDate, content: this.generateTimeSlots() });
    }

    return data;
  }

  private generateTimeSlots(): string[] {
    const slots: string[] = [];
    let hour = 8; // Inicia a las 8 AM
    let suffix = 'AM';

    while (hour <= 22) { // Hasta las 10 PM
      let nextHour = hour + 1;
      let nextSuffix = suffix;

      if (hour === 11) nextSuffix = 'PM';
      if (hour === 12) suffix = 'PM';
      if (nextHour > 12) nextHour -= 12;

      slots.push(`${hour}:00 ${suffix} - ${nextHour}:00 ${nextSuffix}`);
      hour++;
    }

    return slots;
  }

  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }
}
