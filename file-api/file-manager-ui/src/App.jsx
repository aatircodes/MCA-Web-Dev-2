
import { useCallback, useEffect, useState } from 'react';
import './App.css';

const API = 'http://localhost:3000/files';

export default function App() {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState('');
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [newContent, setNewContent] = useState('');
  const [message, setMessage] = useState('');

  const loadFiles = useCallback(async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error('Could not load files');
      setFiles(await response.json());
    } catch (error) {
      setMessage(error.message);
    }
  }, []);

  useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  async function openFile(name) {
    try {
      const response = await fetch(
        `${API}/${encodeURIComponent(name)}`
      );
      const text = await response.text();
      if (!response.ok) throw new Error(text);

      setSelected(name);
      setContent(text);
      setMessage('');
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function createFile(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `${API}/${encodeURIComponent(filename.trim())}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: newContent,
        }
      );

      const text = await response.text();
      if (!response.ok) throw new Error(text);

      const name = filename.trim();
      setFilename('');
      setNewContent('');
      setMessage('File created successfully');
      await loadFiles();
      await openFile(name);
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function saveFile() {
    try {
      const response = await fetch(
        `${API}/${encodeURIComponent(selected)}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'text/plain' },
          body: content,
        }
      );

      const text = await response.text();
      if (!response.ok) throw new Error(text);

      setMessage('File saved successfully');
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function deleteFile() {
    if (!window.confirm(`Delete ${selected}?`)) return;

    try {
      const response = await fetch(
        `${API}/${encodeURIComponent(selected)}`,
        { method: 'DELETE' }
      );

      const text = await response.text();
      if (!response.ok) throw new Error(text);

      setSelected('');
      setContent('');
      setMessage('File deleted successfully');
      await loadFiles();
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <main className="app">
      <header className="topbar">
        <div>
          <h1>File Manager</h1>
          <p>Manage your files in one place.</p>
        </div>
        <button onClick={loadFiles}>Refresh files</button>
      </header>

      {message && (
        <p className="message" role="status">
          {message}
          <button onClick={() => setMessage('')}>×</button>
        </p>
      )}

      <div className="workspace">
        <aside className="sidebar">
          <h2>Your files ({files.length})</h2>

          {files.map(file => (
            <button
              key={file}
              className={`file-item ${
                selected === file ? 'active' : ''
              }`}
              onClick={() => openFile(file)}
            >
              📄 {file}
            </button>
          ))}

          {files.length === 0 && <p>No files found.</p>}

          <form onSubmit={createFile}>
            <h3>Create a file</h3>
            <input
              value={filename}
              onChange={event => setFilename(event.target.value)}
              placeholder="example.txt"
              required
            />
            <textarea
              value={newContent}
              onChange={event => setNewContent(event.target.value)}
              placeholder="Enter file content"
              rows={5}
            />
            <button type="submit">Create file</button>
          </form>
        </aside>

        <section className="editor">
          {selected ? (
            <>
              <div className="editor-heading">
                <h2>{selected}</h2>
                <div>
                  <button onClick={saveFile}>Save changes</button>
                  <button className="delete" onClick={deleteFile}>
                    Delete
                  </button>
                </div>
              </div>

              <textarea
                className="content-editor"
                value={content}
                onChange={event => setContent(event.target.value)}
                spellCheck={false}
                aria-label="File contents"
              />
              <p>Edit the text above and click Save changes.</p>
            </>
          ) : (
            <div className="welcome">
              <h2>Select a file to get started</h2>
              <p>Or create a new file using the panel on the left.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
