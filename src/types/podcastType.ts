export type Episode = {
	title: string;
	file: {
		asset: {
			url: string;
		};
	};
	coverArt: {
		asset: {
			url: string;
		};
		caption?: string;
	};
	_createdAt: string;
	_id: string;
};

export type EpisodeWithNotes = Episode & {
	notes: {
		body: any[];
		title: string;
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
