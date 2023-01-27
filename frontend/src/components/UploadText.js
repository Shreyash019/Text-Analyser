import React, {useState} from 'react';
import './styles/uploadText.css';
import axios from 'axios'

const UploadText = () => {
  //const [newFile, setNewFile] = useState('')
  	//const [selectedFile, setSelectedFile] = useState();
	const [selectedFile, setSelectedFile] = useState('');
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.value);
		//setIsSelected(true);
	};

	const handleSubmission = async (e) => {
		e.preventDefault()
		let form = document.getElementById('form');
		let formData = new FormData(form)
    	axios.post(`/fileupload`, formData )
		.then((result) => {console.log('Success:', result);})
		.catch((error) => {console.error('Error:', error);})
	};

  return (
    <div className='upload-text-container'>
		<form encType="multipart/form-data" onSubmit={handleSubmission} id="form">
			<label htmlFor='files'>Upload file: to Analyze: </label>
			<input type="file" id='files' name="files" value={selectedFile} onChange={changeHandler} />
			<button type="submit">Upload</button>
		</form>

			{/* { isSelected ? (
				<div>
					<p>originalname: {selectedFile.name.name}</p>
					<p>Filetype: {selectedFile.name.type}</p>
					<p>Size in bytes: {selectedFile.name.size}</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)} */}
      <br/>
      <br/>
    </div>
  )
}

export default UploadText