import "./App.css";
import useSWR from "swr";

const headers = { Accept: "application/json" };
const fetcher = (url) => fetch(url, { headers }).then((r) => r.json());

function App() {
  const url = "https://httpstat.us/200?sleep=2000";

  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;
  return <div>Status: {data.description}</div>;
}

export default App;
