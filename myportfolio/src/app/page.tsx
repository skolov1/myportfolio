import Header from "../components/Header";
import { Space_Mono } from "next/font/google";
import Profile from "../components/lastfm/Profile";
import RecentTracks from "../components/lastfm/RecentTracks";
import { getRecentTracks, getUserInfo } from "@/services/lastfm";

const Space = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"]
});

export default async function Home() {
	const [userData, recentTracksData] = await Promise.all([
		getUserInfo(),
		getRecentTracks()
	]);
	return (
		<div className={`h-full w-full flex flex-col ${Space.className}`}>
			<Header />
			<div className="bg-zinc-900 w-full">
				<div className="bg-zinc-900 border border-zinc-950 p-1 rounded-full h-40 w-40 mx-auto lg:mt-48 mt-40 z-20 relative">
					<img
						src="https://github.com/skolov1.png"
						alt=""
						className="rounded-full"
					/>
					<h2 className="ml-8 mt-4 text-2xl text-white font-semibold">
						Voloks1
					</h2>
				</div>
			</div>
			<div className="bg-zinc-900 h-screen w-full z-10 lg:-mt-20 text-white flex flex-col items-center">
				<div className="mx-8 lg:mx-64 2xl:mx-96 pb-12">
					<h1 className="lg:mt-48 mt-24 text-2xl font-semibold py-2">
						about me ♻️
					</h1>
					<p>
						my name is gabriel and i{`'`}m from brazil. currently, i
						{`'`}m part of a community called{" "}
						<a
							className="text-green-600 font-semibold hover:underline"
							href="https://x.com/ecologica_verde"
							target="https://x.com/ecologica_verde">
							Ecológica Verde
						</a>
						. learning front-end development, i want to be a
						full-stack developer in near future.
						<br />
						<br />
						interested in cybersec, music producing and always
						learning something useful.
						<br />i already have some knowledge in web tech{`'`}s
						like html, css, js & ts, and now im aiming to learn some
						js frameworks like react and svelte.
					</p>
					<h1 className="text-2xl font-semibold pt-4 pb-2">
						some projects
					</h1>
					<p>
						i{`'`}m currently active on two main projects, one of
						them is called{" "}
						<span className="font-semibold">
							<span className="text-purple-500">Reel</span>
							StreamTV
						</span>
						. basically is a website where you can find almost every
						movie and tv show/series that you want, know more about
						it and watch on some embedders that provides the movies
						without paying a cent for that.
						<br />
						<br />
						the other project is called{" "}
						<span className="font-semibold">
							Game
							<span className="text-purple-500">Critic</span>
						</span>{" "}
						and is a platform where you can publish reviews of the
						games you
						{`'`}ve been playing, like a letterboxd of games.
					</p>
					<br />
					<br />
					<p className="pb-4">
						if you want to contact me, get in touch by{" "}
						<a
							target="https://discord.com/users/335224495184805890"
							href="https://discord.com/users/335224495184805890"
							className="text-blue-600 hover:underline">
							discord
						</a>
						.
					</p>
					<hr />
					<Profile user={userData.user} />
					<RecentTracks
						tracks={recentTracksData.recenttracks.track}
					/>
				</div>
			</div>
		</div>
	);
}

