import { useNavigate } from "react-router-dom";

export default function Matches({ data, selectedTab, setSelectedTab }) {
  const matches = data[selectedTab] || [];
  const navigate = useNavigate();

  const tabs = [
    { key: "tomorrow", label: "مباريات الغد" },
    { key: "today", label: "مباريات اليوم" },
    { key: "yesterday", label: "مباريات الأمس" },
  ];

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedTab(tab.key)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedTab === tab.key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab.label}{" "}
          </button>
        ))}
      </div>

      {/* Matches */}
      <div className="space-y-4">
        {matches.length > 0 ? (
          matches.map((match, i) => (
            <div
              key={i}
              onClick={() => navigate(`/match/${i}`, { state: match })}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow 
                       cursor-pointer transition duration-200 
                       hover:bg-green-100 dark:hover:bg-green-900"
            >
              {/* Home */}
              <div className="flex items-center gap-2 flex-1">
                <img
                  src={match.homeLogo}
                  alt={match.homeTeam}
                  className="w-10 h-10"
                />
                <span className="font-semibold">{match.homeTeam}</span>
              </div>

              {/* Info */}
              <div className="flex flex-col items-center text-center flex-1">
                <p className="text-lg font-bold">
                  {new Date(match.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-sm">{match.status}</p>
                <p className="text-sm">🏆 {match.tournament}</p>
              </div>

              {/* Away */}
              <div className="flex items-center gap-2 justify-end flex-1">
                <span className="font-semibold">{match.awayTeam}</span>
                <img
                  src={match.awayLogo}
                  alt={match.awayTeam}
                  className="w-10 h-10"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">لا يوجد مباريات</p>
        )}
      </div>
    </div>
  );
}
