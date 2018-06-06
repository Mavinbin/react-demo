import React from 'react'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import theme from 'react-syntax-highlighter/styles/prism/atom-dark'
import jsx from 'react-syntax-highlighter/languages/prism/jsx';

registerLanguage('jsx', jsx)
const Highlighter = (props) => <SyntaxHighlighter language="jsx" style={theme}>{props.code}</SyntaxHighlighter>

export default Highlighter