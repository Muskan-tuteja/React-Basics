import "./App.css";
import styled from "styled-components";

function App() {
  const Heading = styled.h1`
    color: red;
    border: 1px solid green;
  `;

  const Head = styled.h2({
    color:"white",
    background: "red",
    margin: "20px"
  });

  const Btn = styled.button`
  color:black; background: white
  `

  return (
    <>
      <h1>Style componet</h1>
      <Heading>hello hi </Heading>
      <Head>hello no backtek</Head>
      <Btn>Click me!</Btn>
    </>
  );
}

export default App;
