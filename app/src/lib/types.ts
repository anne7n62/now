// testdata: kategorier for events

export type Category = 'concert' | 'quiz' | 'art & music' | 'party' | 'talk' | 'meetup';

export type CalendarEvent = {
	id: number;
	title: string;
	category: Category;
	date: string; // '2026-11-19'
	time: string; // '20:00'
	venue: string;
	city: string;
	description: string;
	url: string;
};

export type WeekGroup = {
	key: string; // '2026-47' – unique, used as the #each key
	week: number;
	year: number;
	events: CalendarEvent[];
};
