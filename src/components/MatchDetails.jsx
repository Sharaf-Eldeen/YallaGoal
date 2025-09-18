import { useLocation, useParams } from "react-router-dom";

export default function MatchDetails() {
  const { state: match } = useLocation();
  const { matchId } = useParams();

  if (!match) {
    return <p className="text-center text-gray-500">No match data found</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Match Card */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 space-y-4 md:space-y-0 md:space-x-6 transition duration-300">
        {/* Home Team */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <img
            src={match.homeLogo}
            alt=""
            className="w-16 h-16 rounded-full shadow-md"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {match.homeTeam}
          </span>
        </div>

        {/* Match Info */}
        <div className="text-center flex flex-col items-center flex-1">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            {new Date(match.time).toLocaleString()}
          </p>
          <span className="px-3 py-1 mt-2 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-sm font-medium">
            🏆 {match.tournament}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {match.status}
          </span>
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {match.awayTeam}
          </span>
          <img
            src={match.awayLogo}
            alt=""
            className="w-16 h-16 rounded-full shadow-md"
          />
        </div>
      </div>

      {/* 🎥 Video Section */}
      <div className="bg-black rounded-2xl shadow-lg overflow-hidden">
        <iframe
          className="w-full h-[450px] md:h-[550px]"
          src={match.videoUrl}
          title="Match Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
