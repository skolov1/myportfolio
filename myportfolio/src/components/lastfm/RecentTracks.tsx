import { RecentTrack } from "@/types/lastfm";
import Link from "next/link";

interface RecentTracksProps {
	tracks: RecentTrack[];
}

export default function RecentTracks({ tracks }: RecentTracksProps) {
	return (
		<div className="">
			<h2 className="text-2xl font-bold mb-4">recent songs</h2>
			<div className="flex flex-col lg:grid lg:grid-cols-5 gap-y-2 lg:gap-x-4">
				{tracks.slice(0, 5).map((track, index) => (
					<Link
						key={index}
						href={`https://open.spotify.com/search/${encodeURIComponent(
							`${track.name} ${track.artist["#text"]}`
						)}`}
						target="_blank"
						rel="noopener noreferrer">
						<div className="p-4 border rounded bg-zinc-950/40 hover:bg-zinc-950/70 transition-colors cursor-pointer lg:min-h-72">
							<p className="font-medium">{track.name}</p>
							<p className="text-sm text-zinc-100 mt-2">
								artist: {track.artist["#text"]}
							</p>
							<p className="text-sm text-zinc-100 mt-1">
								album: {track.album["#text"]}
							</p>
							<div className="mt-2">
								{track.date ? (
									<p className="text-sm text-zinc-400">
										{new Date(
											Number(track.date.uts) * 1000
										).toLocaleString()}
									</p>
								) : (
									<p className="text-sm text-green-600">
										listening rn to ▶️
									</p>
								)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

