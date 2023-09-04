import {Component} from 'react'

import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, under: false}

  changeBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  changeItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  changeUnderline = () => {
    this.setState(prevState => ({
      under: !prevState.under,
    }))
  }

  render() {
    const {bold, italic, under} = this.state
    const style1 = bold && 'addBold'
    const style2 = italic && 'addItalic'
    const style3 = under && 'addUnder'

    const color1 = bold ? 'addColor1' : 'button1'
    const color2 = italic ? 'addColor1' : 'button1'
    const color3 = under ? 'addColor2' : 'button2'

    return (
      <div className="mainSection">
        <div className="subSection">
          <div className="imageSection">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
              className="image"
            />
          </div>
          <div className="textSection">
            <ul className="styleSection">
              <li>
                <button
                  onClick={this.changeBold}
                  type="button"
                  data-testid="bold"
                  className={color1}
                >
                  B
                </button>
              </li>
              <li>
                <button
                  onClick={this.changeItalic}
                  type="button"
                  data-testid="italic"
                  className={color2}
                >
                  I
                </button>
              </li>
              <li>
                <button
                  onClick={this.changeUnderline}
                  type="button"
                  data-testid="underline"
                  className={color3}
                >
                  U
                </button>
              </li>
            </ul>

            <textarea
              type="text"
              className={`input ${style1} ${style2} ${style3} `}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default TextEditor
