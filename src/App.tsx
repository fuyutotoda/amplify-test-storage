import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function App() {
  const [file, setFile] = React.useState();

  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  }

  return (
    <main>
      <div>
      <input type="file" onChange={handleChange} />
        <button
          onClick={() =>
            uploadData({
              path: `picture-submissions/${file.name}`,
              data: file,
          })
        }
      >
        Upload
      </button>
    </div>
    </main>
  );
}

export default App;
