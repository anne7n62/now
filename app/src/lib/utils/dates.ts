//Hjælpe funktioner, der bruges til at håndtere datoer og uger
import type { CalendarEvent, WeekGroup } from '#lib/types.js';

/** '2026-11-19' → Date at local midnight. Adding 'T00:00' avoids the day shifting because of time zones. */
export function toDate(date: string): Date {
	return new Date(`${date}T00:00`);
}

/** ISO standard - uge starte mandag - uge 1 er den første uge i året som torsdag ligger i **/
export function getIsoWeek(date: Date): { week: number; year: number } {
	const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
	const day = d.getUTCDay() || 7; // Søndag = 7 (ikke 0)
	d.setUTCDate(d.getUTCDate() + 4 - day); // hopper til torsdag i samme uge - afgør hvilket år ugen hører til
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7); // antal dage siden 1. januar / 7 = uge nummer
	return { week, year: d.getUTCFullYear() };
}

/** '2026-11-19' → 'Thu 19' */
export function formatDay(date: string): string {
	return new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric' }).format(
		toDate(date)
	);
}

/** sortere event efter dato og tidpunkt. Derefter grupperes de efter uge */
export function groupByWeek(events: CalendarEvent[]): WeekGroup[] {
	const sorted = [...events].sort((a, b) =>
		`${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
	);

	const groups = new Map<string, WeekGroup>();
	for (const event of sorted) {
		const { week, year } = getIsoWeek(toDate(event.date));
		const key = `${year}-${week}`;
		if (!groups.has(key)) groups.set(key, { key, week, year, events: [] });
		groups.get(key)!.events.push(event);
	}
	return [...groups.values()];
}
