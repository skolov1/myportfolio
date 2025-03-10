import { LastFMUser } from "@/types/lastfm";

interface ProfileProps {
	user: LastFMUser;
}

export default function Profile({ user }: ProfileProps) {
	return (
		<div className="mt-4 pb-4">
			<h2 className="text-2xl font-bold mb-4">voloks{`'`} profile</h2>
			<div className="space-y-2">
				<p>
					<strong>name -</strong> {user.name}
				</p>
				<p>
					<strong>real Name -</strong> {user.realname || "*******"}
				</p>
				<p>
					<strong>country -</strong> {user.country || "Não informado"}
				</p>
				<p>
					<strong>listened songs -</strong>{" "}
					{Number(user.playcount).toLocaleString()}
				</p>
				<p>
					<strong>registered in -</strong>{" "}
					{new Date(
						Number(user.registered["#text"]) * 1000
					).toLocaleDateString()}
				</p>
			</div>
		</div>
	);
}

