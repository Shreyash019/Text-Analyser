import React, { useEffect, useState } from 'react';
// import { Text_API_NUMBER_1 } from '../config';
import toast from 'react-hot-toast';


const GrammerEditor = () => {

  const [textInput, setTextInput] = useState();
  const [textLength, setTextLength] = useState(0);
  const [showAlert, setAlert] = useState('');
  const [tempData, setTempData] = useState()

  const handleInputChange = (e) => {
    e.preventDefault();
    let inputLength = e.target.value.length;
    if (inputLength > 1000) {
      if (!showAlert) {
        // toast.error(`Maximum allowed characters achieved, So new characters can't be entered anymore.`)
        setTempData(`Maximum allowed character length exhausted!`);

      }
      setAlert(`Maximum allowed characters achieved, So new characters can't be entered anymore.`)
    } else {
      setAlert()
      setTextInput(e.target.value);
      setTextLength(e.target.value.length);
    }
  }

  useEffect(() => {
    if (tempData) {
      setTimeout(() => setTempData(), 2000)
    }
  }, [showAlert, tempData])

  return (
    <div className='w-screen min-h-screen h-auto flex items-center justify-center bg-black overflow-auto'>
      <div className='w-[80%] sm:w-[100%] min-h-[32rem] h-auto block p-4 sm:py-4 sm:px-[2%] bg-black-gray rounded-xl overflow-auto'>
        <div className='w-[90%] sm:w-[98%] h-[2.5rem] mx-[5%] sm:mx-[1%] float-left flex items-center justify-start overflow-auto'>
          <span className='w-auto h-auto px-4 py-1 text-lg font-medium rounded-md text-white bg-black'>Grammer Checker</span>
        </div>

        <div className='w-[100%] h-auto float-left overflow-auto my-4'>
          {tempData
            ?
            <div className='w-[90%] sm:w-[98%] min-h-[20rem] sm:min-h-[25rem] mx-[5%] sm:mx-[1%] my-2 flex items-center justify-center h-auto p-4 text-lg font-semibold text-red rounded-xl outline-none bg-black'>{tempData}</div>
            :
            <textarea className='w-[90%] sm:w-[98%] min-h-[20rem] sm:min-h-[25rem] mx-[5%] sm:mx-[1%] my-2 h-auto p-4 text-base sm:text-xs text-white rounded-xl outline-none bg-black'
              placeholder='Enter text here...' value={textInput || ''} onChange={handleInputChange}>
            </textarea>
          }
          <div className='w-[90%] sm:w-[98%] h-[1.5rem] mx-[5%] sm:mx-[1%] px-2 float-left'>
            <p className={`text-xs ${showAlert ? 'text-red' : 'text-blue'}`}>{showAlert ? showAlert : `${textLength} of 1000 characters.`}</p>
          </div>
          <div className='w-[90%] sm:w-[98%] h-[3rem] mx-[5%] sm:mx-[1%] my-4 px-2 float-left'>
            <button className='w-auto h-[2rem] px-4 bg-green text-md sm:text-sm text-white font-medium rounded-sm'>Analyse</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GrammerEditor