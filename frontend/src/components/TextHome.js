import React from 'react';
import './styles/textHome.css';

const TextHome = () => {
  
  return (
    <div className='texthome-container'>
        <br/><h3>Analyse your text here</h3>
        <div className='textare-input-Analyser'>
            <textarea placeholder='Enter your text here'></textarea><br/>
            <button onClick={()=> alert('Analased')}>Analyse</button>
            <button onClick={()=> alert('Nourn Analased')}>Noun</button>
            <button onClick={()=> alert('Verb Analased')}>Verb</button>
            <button onClick={()=> alert('Adjective Analased')}>Adjective</button>
            <button onClick={()=> alert('Adverb Analased')}>Adverb</button>
            <br/>
            <p>Total words: 0</p>
            <p>0 Noun(0%), 0 Verb(0%), 0 Adjective(0%), 0 Adver(0%)</p>
            <br/><hr/>
        </div>
        <br/>
    </div>
  )
}

export default TextHome