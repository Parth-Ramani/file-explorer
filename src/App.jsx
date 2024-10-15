import FileExplorerContextWrappper, {
  FileExplorerContext
} from "./components/context/FileExplorerContext.jsx";
import FileExplorer from "./components/FileExplorer.jsx";
import folderData from "./data/folderData.js";
// import "./App.css";
function App() {
  return (
    <FileExplorerContextWrappper>
      <FileExplorer />
    </FileExplorerContextWrappper>
  );
}

export default App;
