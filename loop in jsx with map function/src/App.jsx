import "./App.css";

function App() {
  const userData = [
    {
      name: "muskan",
      age: "23",
      email: "muskan@gail.com",
      id: 1,
    },
    {
      name: "mahi",
      age: "20",
      email: "mahiskan@gail.com",
      id: 2,
    },
    {
      name: "musu",
      age: "29",
      email: "muus@gail.com",
      id: 3,
    },
    {
      name: "mushi",
      age: "63",
      email: "muushi@gail.com",
      id: 4,
    },
    {
      name: "muskin",
      age: "73",
      email: "mmkiushi@gail.com",
      id: 5,
    },
  ];

  const sudentData = [
    {
      id: "1001",
      name: "isha",
      course: "cse",
      age: "23",
    },
    {
      id: "1002",
      name: "issha",
      course: "m.tech",
      age: "13",
    },
    {
      id: "1003",
      name: "ishaa",
      course: "mue",
      age: "93",
    },
    {
      id: "1004",
      name: "ishaa",
      course: "ite",
      age: "73",
    },
  ];

  return (
    <>
      <h1>Loop in JSX with Map Function</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Student data</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Course</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {sudentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
