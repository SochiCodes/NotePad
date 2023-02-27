import React from 'react'


import {ImFontSize} from 'react-icons/im'
import { 
  FaBold, 
  FaItalic, 
  FaUnderline, 
  FaCopy, 
  FaPaste, 
  FaCut, 
  FaImage 
} from 'react-icons/fa'


export default function TextEditor() {

  const turnBold = () =>{
   document.execCommand("bold")
  }
  const turnItalics = () =>{
    document.execCommand("italic")
  }
  const underline = () =>{
  document.execCommand("underline")
  }

  const copy = () => {
    document.execCommand('copy')
  }
  const cut = () => {
    document.execCommand('cut')
  }
  const paste = () => {
    document.execCommand('paste')
  }
  const chooseFont = () => {
    document.execCommand('font')
  }
  const loadImage = () => {
    document.execCommand('insertimage')
  }


  const preventDefault = (event) => event.preventDefault()
  return (
    
    <div className='container'>
        {/* ToolBox Section */}
        <section className='flex toolBar'>
          <FaBold className='icon' onClick={turnBold} onMouseDown={(event) => event.preventDefault()}/>
          <FaItalic className='icon' onClick={turnItalics} onMouseDown={preventDefault}/>
          <FaUnderline className='icon' onClick={underline} onMouseDown={preventDefault}/>
          <FaCopy className="icon" onClick={copy} onMouseDown={preventDefault}/>
          <FaCut className="icon" onClick={cut} onMouseDown={preventDefault}/>
          <FaPaste className="icon" onClick={paste} onMouseDown={preventDefault}/>
          <ImFontSize className="icon" onClick={chooseFont} onMouseDown={preventDefault}/>
          <FaImage className="icon" onClick={loadImage} onMouseDown={preventDefault}/>
        </section>

        {/* Main Document Section */}
        <section className='flex main'>
            <header>
              <input type="text" name="title" id="title" placeholder='Untitled...' />
              <div className='export-section'>
                <select name="export" id="exp">
                  <option value="0">Export as:</option>
                  <option value="1">PDF</option>
                  <option value="2">.TXT</option>
                </select>
              </div>
            </header>
            <div className="document" contentEditable="true">
              Start Typing...
            </div>
        </section>

    </div>
  )
}
