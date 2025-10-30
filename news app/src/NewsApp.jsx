import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "5532ed93cda4c23452a58de380f42bab"; // 👈 यहाँ अपनी API key डालो

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?country=in&apikey=${API_KEY}`
        );
        setArticles(res.data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news");
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading news...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        📰 Latest News
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="news"
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-3">
                {article.description?.slice(0, 100)}...
              </p>
              <a
                href={article.url}
                target="_blank"
                className="text-blue-500 font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
