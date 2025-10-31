import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const API_KEY = "VB7I4XQO2E1FELFU"; // 👉 Replace with your Alpha Vantage API key

const StockPriceApp = () => {
  const [symbol, setSymbol] = useState("AAPL");
  const [data, setData] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStock = async () => {
    if (!symbol) return;
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
      );

      const timeSeries = res.data["Time Series (5min)"];
      if (!timeSeries) throw new Error("Invalid symbol or API limit reached");

      const chartData = Object.entries(timeSeries)
        .map(([time, value]) => ({
          time,
          price: parseFloat(value["1. open"]),
        }))
        .reverse();

      setData(chartData);
      setInfo({ name: symbol.toUpperCase(), lastPrice: chartData.at(-1)?.price });
    } catch (err) {
      setError("Failed to load stock data. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStock();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        📈 Smart Stock Price App
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol (e.g. TCS, AAPL)"
          className="border border-gray-400 rounded-l-lg p-2 w-64 focus:outline-none"
        />
        <button
          onClick={fetchStock}
          className="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {info && (
        <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">{info.name}</h2>
          <p className="text-gray-700 mb-4">Last Price: 💰 {info.lastPrice}</p>

          {data.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="time" hide />
                <YAxis domain={["auto", "auto"]} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      )}
    </div>
  );
};

export default StockPriceApp;
