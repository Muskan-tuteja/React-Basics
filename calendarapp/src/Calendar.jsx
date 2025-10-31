import React, { useState } from "react";

const CalendarApp = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // महीने के पहले दिन और कुल दिनों की गणना
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // पिछले और अगले महीने बदलने के फ़ंक्शन
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // दिन cells बनाना
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= totalDays; i++) days.push(i);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-blue-400 p-6">
      <div className="bg-white/80 rounded-xl shadow-2xl p-6 w-full max-w-lg text-center">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevMonth}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ◀
          </button>
          <h2 className="text-2xl font-bold text-gray-700">
            {months[month]} {year}
          </h2>
          <button
            onClick={nextMonth}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ▶
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 font-semibold text-gray-600 mb-2">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2 text-gray-800">
          {days.map((day, i) => (
            <div
              key={i}
              className={`h-12 flex items-center justify-center rounded-lg ${
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
                  ? "bg-yellow-400 text-white font-bold"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {day || ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
