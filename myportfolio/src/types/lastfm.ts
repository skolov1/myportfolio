export interface LastFMUser {
	name: string;
	realname: string;
	country: string;
	playcount: string;
	registered: {
		"#text": string;
	};
}

export interface RecentTrack {
	name: string;
	artist: { "#text": string };
	album: { "#text": string };
	date?: { uts: string };
	"@attr"?: { nowplaying: string };
}

export interface UserInfoResponse {
	user: LastFMUser;
}

export interface RecentTracksResponse {
	recenttracks: {
		track: RecentTrack[];
	};
}
