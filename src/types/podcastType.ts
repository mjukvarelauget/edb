import type { InputValue } from "@portabletext/svelte/ptTypes";

type SanityImage = {
	asset: {
		url: string;
	};
	caption?: string;
};

export type Episode = {
	title: string;
	file: {
		asset: {
			url: string;
		};
	};
	coverArt: SanityImage;
	_createdAt: string;
	_id: string;
};

export type EpisodeWithNotes = Episode & {
	notes: {
		body: InputValue
		title: string;
		mainImage: SanityImage;
	};
};

export type Podcast = {
	title: string;
	subtitle: string;
	externalLinks: {
		label: string;
		icon: {
			asset: {
				url: string;
			};
		};
		href: string;
	}[];
};
