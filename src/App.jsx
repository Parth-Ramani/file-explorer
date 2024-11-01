import FileExplorerContextWrappper from "./components/context/FileExplorerContext.jsx";
import FileExplorer from "./components/FileExplorer.jsx";
// import "./App.css";
function App() {
  return (
    <FileExplorerContextWrappper>
      <FileExplorer />
    </FileExplorerContextWrappper>
  );
}

export default App;
