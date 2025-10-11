import "./App.css";
import College from "./College";

function App() {
  const collegeData = [
    {
      name: "bpsmv",
      city: "sonipat",
      website: "www.spnocomm",
      student: [
        {
          name: "muskan",
          age: "23",
          email: "anill.com",
        },
        {
          name: "mahui",
          age: "83",
          email: "mahii.com",
        },
        {
          name: "musu",
          age: "53",
          email: "musu.com",
        },
        {
          name: "isha",
          age: "13",
          email: "isha.com",
        },
      ],
    },

    {
      name: "iit",
      city: "Delhi",
      website: "www.delhicomm",
      student: [
        {
          name: "muskan",
          age: "23",
          email: "anill.com",
        },
        {
          name: "mahui",
          age: "83",
          email: "mahii.com",
        },
        {
          name: "musu",
          age: "53",
          email: "musu.com",
        },
        {
          name: "isha",
          age: "13",
          email: "isha.com",
        },
      ],
    },
    {
      name: "poly",
      city: "ambala",
      website: "www.amcomm",
      student: [
        {
          name: "muskan",
          age: "23",
          email: "anill.com",
        },
        {
          name: "mahui",
          age: "83",
          email: "mahii.com",
        },
        {
          name: "musu",
          age: "53",
          email: "musu.com",
        },
        {
          name: "isha",
          age: "13",
          email: "isha.com",
        },
      ],
    },
    {
      name: "it",
      city: "panipat",
      website: "www.itcomm",
      student: [
        {
          name: "muskan",
          age: "23",
          email: "anill.com",
        },
        {
          name: "mahui",
          age: "83",
          email: "mahii.com",
        },
        {
          name: "musu",
          age: "53",
          email: "musu.com",
        },
        {
          name: "isha",
          age: "13",
          email: "isha.com",
        },
      ],
    },
  ];

  return (
    <>
      <h1>Nested Looping With Component</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </>
  );
}

export default App;
