import Weather from "./Weather";
import { useState, useEffect } from "react";
import GitHubIcon from "~icons/octicon/mark-github-16";

function App() {
  const [city, setCity] = useState("");
  const githubLink = "https://github.com/garze05";

  useEffect(() => {
    if (city) console.log("City:", city);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setCity(formJson.city);
    form.reset(); // Limpia el input después de buscar
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Weather App ☁️
          </h1>
          <a
            href={githubLink}
            className="inline-block hover:text-blue-100 transition-colors"
          >
            <div className="flex items-center justify-center gap-2">
              <p className="text-blue-200 opacity-80 hover:opacity-100">
                by @garze05
              </p>
              <GitHubIcon className="h-6 w-6 text-white/80" />
            </div>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="city"
                className="block text-white font-medium mb-2"
              >
                Search for a city
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="San José, Madrid, ..."
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/30 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-90 cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        <Weather city={city} />
      </div>
    </main>
  );
}

export default App;
