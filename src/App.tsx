import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function App() {
  const [file, setFile] = React.useState();

  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  }

  const upload = (file:any|undefined){
    if (typeof(file)=="undefined"){
      window.alert("ファイルが設置されていません")
    }else{
      uploadData({
        path: `picture-submissions/${file.name}`,
        data: file,
    })
    }
  }

  return (
    <main>
      <div>
      {/* ファイルをアップするためのinput要素 */}
      <input type="file" onChange={handleChange} />
      {/* アップロードボタン */}
        <button
          onClick={() =>
            upload(file)
        }
      >
        Upload
      </button>
    </div>
    </main>
  );
}

export default App;
