import React, { useEffect,useState } from 'react'
import Markdown from 'react-markdown'
import { Macwindow } from "./Macwindow";
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = () => {
let [markdown, setmarkdown] = useState(null);
useEffect(()=>{
    fetch("/note.txt")
    .then(res=> res.text())
    .then(text => setmarkdown(text))
})

  return (
    <div>
    <Macwindow>
      <div className="Note-window">
        {markdown?<SyntaxHighlighter language='typescript'  style={atelierDuneDark}>{markdown}</SyntaxHighlighter>: <p>loding....</p> }
      </div>
    </Macwindow>

    </div>
  )
}

export default Note
