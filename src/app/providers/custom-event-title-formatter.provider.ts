import { LOCALE_ID, Inject } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  // you can override any of the methods defined in the parent class

  month(event: CalendarEvent): string {
    return `<b>${new DatePipe(this.locale).transform(
      event.start,
      'h:mm a',
      this.locale
    )}${new DatePipe(this.locale).transform(
      event.end,
      '-h:mm a',
      this.locale
    )}</b> ${event.title}`;
  }

  week(event: CalendarEvent): string {
    return `${ event.meta.recipe.totalTime || event.meta.recipe.cookTime }
    min, ${event.title}`
    // return `<b>${new DatePipe(this.locale).transform(
    //   event.start,
    //   'h:mm a',
    //   this.locale
    // )}</b> ${event.title}`;
  }

  day(event: CalendarEvent): string {
    return `${ event.meta.recipe.totalTime || event.meta.recipe.cookTime }
      min, ${event.title}`
  }
}