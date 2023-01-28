import React, {useState, useEffect} from 'react';
import './styles/textHome.css';
import axios from 'axios'

const TextHome = () => {
  const [getData, setGetData] = useState({})

  useEffect(()=>{
    const fetchData = async () =>{
      await axios.get(`/data`)
      .then(res =>{return res.data})
      .then(getData=> {
        //setGetData(res)
        console.log(getData)
      })
    }
    fetchData()
  },[])
  return (
    <div className='texthome-container'>
        <br/><h3>Analyse your text here</h3>
        <div className='textare-input-Analyser'>
            <textarea placeholder='Enter your text here'></textarea><br/>
            <button onClick={()=> alert('Analased')}>Analyse</button>
            <br/>
            <p>Total words: </p>
            <p>Noun: 0 (0%), Verb: 0 (0%), Adjective: 0 (0%), Adver: 0 (0%)</p>
            <br/><hr/>
        </div>
        <br/>
    </div>
  )
}

export default TextHome