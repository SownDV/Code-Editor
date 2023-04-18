import { useRef } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";

const App = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    console.log(editorRef.current.getValue());
  }

  return (
    <>
      <h2>Input</h2>
      <Editor
        height="50vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <button onClick={showValue}>Show value</button>
    </>
  );
};

export default App;
