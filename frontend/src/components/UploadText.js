import React, {useState} from 'react';
import './styles/uploadText.css';
import axios from 'axios'

const UploadText = () => {
  //const [newFile, setNewFile] = useState('')
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = async () => {
		const formData = new FormData();
		formData.append('File', selectedFile);
		console.log(selectedFile)
		fetch(`/fileupload`,{
				method: 'POST',
				body: selectedFile,
		})
    .then((response) => response.json())
		.then((result) => {console.log('Success:', result);})
		.catch((error) => {console.error('Error:', error);})
		
    	// axios.post(`/fileupload`, selectedFile)
		// // .then((response) => response.json())
		// .then((result) => {console.log('Success:', result);})
		// .catch((error) => {console.error('Error:', error);})
	};

  return (
    <div className='upload-text-container'>
      <label htmlFor='files'>Upload file: to Analyze: </label>
      <input type="file" id='files' name="files" onChange={changeHandler} />
			{ isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
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