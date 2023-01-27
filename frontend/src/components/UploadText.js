import React, {useState} from 'react';
import './styles/uploadText.css';
import axios from 'axios'

const UploadText = () => {
  //const [newFile, setNewFile] = useState('')
  	//const [selectedFile, setSelectedFile] = useState();
	const [selectedFile, setSelectedFile] = useState({
		fieldname: 'files',
		originalname: '',
		encoding: '7bit',
		mimetype: 'text/plain'
	});
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile({...selectedFile, originalname:  event.target.files[0]});
		setIsSelected(true);
	};

	const handleSubmission = async (e) => {
		e.preventDefault()
		console.log('----')
		console.log(selectedFile)
		console.log('----')
		let sendFile = selectedFile
		console.log(sendFile)
		// fetch(`/fileupload`,{
		// 		method: 'POST',
		// 		body: selectedFile,
		// })
    	// .then((response) => response.json())
		// .then((result) => {console.log('Success:', result);})
		// .catch((error) => {console.error('Error:', error);})
		
    	axios.post(`/fileupload`, sendFile, { Content_Types: 'application/json' })
		.then((result) => {console.log('Success:', result);})
		.catch((error) => {console.error('Error:', error);})
	};

  return (
    <div className='upload-text-container'>
      <label htmlFor='files'>Upload file: to Analyze: </label>
      <input type="file" id='files' name="files" onChange={changeHandler} />
			{ isSelected ? (
				<div>
					<p>originalname: {selectedFile.originalname.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}

      <button onClick={handleSubmission}>Upload</button>
      <br/>
      <br/>
    </div>
  )
}

export default UploadText