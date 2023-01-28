import React, {useState, useEffect} from 'react';
import './styles/textHome.css';
import './styles/uploadText.css';
import axios from 'axios'

const TextHome = () => {
  const [getData, setGetData] = useState({
    data: {
      data: ''
    }
  });
  const [idd, setIdd] = useState()

  const [selectedFile, setSelectedFile] = useState('');

  // Handle File Change
  const changeHandler = (event) => {
		setSelectedFile(event.target.value);
	};

	const handleSubmission = async (e) => {
		e.preventDefault()
		let form = document.getElementById('form');
		let formData = new FormData(form)
    axios.post(`/fileupload`, formData )
    .then((res) => {return res.data.id})
    .then((de)=> fetchData(de))
		.catch((error) => {console.error('Error:', error);})
	};
  
  const handleOnClick = async (event) =>{
    alert('File Uploaded')
  }

  // Sending data to frontend
  const fetchData = async (id) =>{
    console.log(id)
    await axios.get(`/data`)
    .then(res =>{return res.data})
    .then(data=> { setGetData(data)})
  }

  return (
    <>
      <div className='texthome-container'>
          <br/><h3>Analyse Text Document by uploading text file</h3>
          <div className='textare-input-Analyser'>
              <textarea placeholder='Enter your text here' onChange={(e)=> e.target.value} value={(!getData.data.data)? 'Upload text file first' : getData.data.data} disabled> </textarea><br/>
              <p>Characters: {getData.Characters}, Words: {getData.Words}, Sentences: {getData.Sentences}</p>
              <button onClick={()=> alert('Analysed')}>Analyse</button>
              <br/>
              <p>Noun: {getData.Nouns} (0%), Verb: {getData.Verbs} (0%), Adjective: 0 (0%), Adver: 0 (0%)</p>
              <br/><hr/>
          </div>
          <br/>
      </div>

      <div className='upload-text-container'>
      <form encType="multipart/form-data" onSubmit={handleSubmission} id="form">
        <label htmlFor='files'>Upload text file to Analyze: </label>
        <input type="file" id='files' name="files" value={selectedFile} onChange={changeHandler} />
        <button type="submit" onClick={handleOnClick}>Upload</button>
      </form>
        <br/>
        <br/>
      </div>
    </>
  )
}

export default TextHome