import React, {useState} from 'react';
import './styles/uploadText.css';
import axios from 'axios'

const UploadText = () => {
  const [newFile, setNewFile] = useState('')

  const handleUploadedFile = (e)=>{
    setNewFile(e.target.value.split);
  }

  const handleOnclick = async (e)=>{
    e.preventDefault();
    console.log(newFile)
    await axios.post(`http:://localhost:5000/api/v1/text/fileupload`, newFile)
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))
  }


  return (
    <div className='upload-text-container'>
      <label htmlFor='files'>Upload file: to Analyze: </label>
      <input type="file" id='files' name="files" value={newFile} onChange={handleUploadedFile} />
      <button onClick = {handleOnclick}>Upload</button>
      <br/>
      <br/>
    </div>
  )
}

export default UploadText