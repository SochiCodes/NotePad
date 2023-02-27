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


export default class ComponentOne extends React.Component {
  render() {
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

    const preventDefault = (event) => event.preventDefault()

    return (
      <div className='container'>
        {/* ToolBox Section */}
        <section className='flex toolBar'>
          <FaBold className='icon' onClick={turnBold} onMouseDown={(event) => event.preventDefault()} title="Make Bold"/>
          <FaItalic className='icon' onClick={turnItalics} onMouseDown={preventDefault} title="Make Italic"/>
          <FaUnderline className='icon' onClick={underline} onMouseDown={preventDefault} title="Underline Text"/>
          <FaCopy className="icon" onClick={copy} onMouseDown={preventDefault} title="Copy Text"/>
          <FaCut className="icon" onClick={cut} onMouseDown={preventDefault} title="Cut Text"/>
          <FaPaste className="icon"  onMouseDown={preventDefault} title="Paste Copied"/>
          <ImFontSize className="icon" onMouseDown={preventDefault} title="Change Font Size"/>
          <FaImage className="icon" onMouseDown={preventDefault} title="Insert Image"/>
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
            <div className="document" contentEditable="true" data-text='Start typing....example "Tinubu will never be our President... 😕"'>
              
            </div>
        </section>
      </div>
    );
  }
}

