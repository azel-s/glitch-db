import { useState } from "react"

function App() {
  const [data, setData] = useState({});

  async function populateData() {
    const response = await fetch("/api");
    setData(await response.json());
  }

  return (
    <>
      <button onClick={populateData}>Get Data</button>
      <ul>
        {data.users && data.users.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
    </>
  )
}

export default App
