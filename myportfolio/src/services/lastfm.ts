import { UserInfoResponse, RecentTracksResponse } from "@/types/lastfm";

const API_KEY = "d7fb58d5ceab1582704aa663bbc60308";
const USER = "skolov_";

export async function getUserInfo(): Promise<UserInfoResponse> {
	const res = await fetch(
		`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${USER}&api_key=${API_KEY}&format=json`
	);
	return res.json();
}

export async function getRecentTracks(): Promise<RecentTracksResponse> {
	const res = await fetch(
		`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json`
	);
	return res.json();
}

