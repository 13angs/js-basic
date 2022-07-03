import React from 'react';
import('./app.css');

const api_url = 'http://localhost:3001/wordle.json';

export default function App(){
    const [word, setWord] = React.useState(null);
    const [keyDown, setKeyDown] = React.useState('');
    const [rows, setRows] = React.useState(new Array(6).fill(null));
    const [rowInd, setRowInd] = React.useState(0);

    // fetch the wordle on component mount
    React.useEffect(() => {
        async function fetchWord(){

            const res = await fetch(api_url);
            const data = await res.json();
            const randWord = Math.floor(Math.random() * data.length)
            setWord(data[randWord]);
        }
        
        fetchWord();

    }, []);

    // check the keydown and trucate the key press
    // if greeater than 5 
    // reset the word to empty string
    React.useEffect(() => {
        const onKeyDown = (e) => {
            setKeyDown( key => {
                if(key.length <= 5)
                {
                    key = key+e.key;
                    setRows(prevRows => {
                        prevRows[rowInd] = key;
                        return prevRows;
                    })
                }else{
                    key = ''
                }

                return key;
            });
        }

        document.addEventListener('keydown', onKeyDown);

        return () => document.removeEventListener(onKeyDown);
    }, []);

    return (
        <div>
            <Tile rows={rows} rowInd={rowInd} />
        </div>
    )
}

function Tile({rows, rowInd}){
    
    return (
        <div className='tile'>
            {rows.map((row, ind) => {
                return <Line key={ind} row={row} rowInd={rowInd} ind={ind}/>
            })}
        </div>
    )
}

function Line({row, ind, rowInd}){
    const lines = [];
    for(let i=0; i < 5; i++){
        lines.push(
            <div key={i} className='line'>
                {row && row[i] && rowInd === ind ? row[i] : ''}
            </div>
        )
    }
    return (
        <div className='lines'>
            {lines}
        </div>
    )
}