import Column from "./components/Column/Column";

function App() {
  return (
    <div
      className="min-h-screen bg-cover flex justify-center items-start font-mono"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpeg)`,
      }}
    >
      <Column state="Incomplete" />
      <Column state="In-Progress" />
      <Column state="Done" />
    </div>
  );
}

export default App;
