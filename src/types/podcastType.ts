import type { InputValue } from '@portabletext/svelte/ptTypes';

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

export type Note = {
	body: InputValue;
	title: string;
	mainImage: SanityImage;
	sources: {
		_id: string;
		source: string;
		url: string;
	}[];
	slug: string;
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
