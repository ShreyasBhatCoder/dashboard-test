import { AfterViewInit, Component, effect, ElementRef, inject, model, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Calendar as VanillaCalendar, Options } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/styles/index.css';
import 'vanilla-calendar-pro/styles/themes/slate-light.css';

import { ThemeService } from '../../theme-service.service';


@Component({
  selector: 'app-calendar',
  imports: [MatCardModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [provideNativeDateAdapter()],
  encapsulation: ViewEncapsulation.None
})
export class Calendar implements AfterViewInit {
  selectedDate = model<Date | null>(null);
  @ViewChild("calendar") calendarRef!: ElementRef;

  private calendar!: VanillaCalendar;

  themeService = inject(ThemeService);

  private generateCalendarPopups(inputRanges: string[]): Record<string, { modifier: string }> {
    const popups: Record<string, { modifier: string }> = {};

    inputRanges.forEach(item => {
      // If it's a range (contains ':')
      if (item.includes(':')) {
        const [startStr, endStr] = item.split(':');
        const start = new Date(startStr);
        const end = new Date(endStr);

        const current = new Date(start);
        while (current <= end) {
          const dateStr = current.toISOString().split('T')[0];

          // Assign the correct capsule styling depending on where the day sits in the range
          let modifier = 'vanilla-calendar-day_selected';
          if (dateStr === startStr) {
            modifier += ' vanilla-calendar-day_selected-first';
          } else if (dateStr === endStr) {
            modifier += ' vanilla-calendar-day_selected-last';
          } else {
            modifier += ' vanilla-calendar-day_selected-intermediate';
          }

          popups[dateStr] = { modifier };
          current.setDate(current.getDate() + 1);
        }
      } else {
        // It's a standalone single date
        popups[item] = { modifier: 'vanilla-calendar-day_selected' };
      }
    });

    return popups;
  }


  constructor() {
    effect(() => {
      const isDark = this.themeService.isDarkMode();
      const currentTheme = isDark ? "dark" : "slate-light"

      if (this.calendar) {
        this.calendar.selectedTheme = currentTheme;
        this.calendar.update();
      }
    })
  }

  ngAfterViewInit(): void {

    const initialTheme = this.themeService.isDarkMode() ? "dark" : "slate-light";

    const staticRange = ["2026-09-01:2026-09-05", "2026-09-21"];

    const options: Options = {
      type: "default",
      firstWeekday: 0,
      selectionDatesMode: false,
      selectedDates: [...staticRange],
      animation: true,
      enableSwipe: true, // Prevents touch drag gestures on mobile
      selectedTheme: initialTheme,

      // This fires immediately when someone tries to click or drag a new date range
      onClickDate: (self) => {
        // 1. Force the internal calendar state back to your static range
        self.set({ selectedDates: [...staticRange] });

        // 2. Re-render the calendar to overwrite any temporary UI hover/drag updates
        self.update();
      }
    };

    this.calendar = new VanillaCalendar(this.calendarRef.nativeElement, options);
    this.calendar.init();
  }




}
