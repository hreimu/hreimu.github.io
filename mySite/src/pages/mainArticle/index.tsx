import React from "react";
import ReactMarkDown from 'react-markdown'
// @ts-ignore
import md from '../md/react/1123_1.md'
// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// @ts-ignore
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Main() {
  // @ts-ignore
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={dark} language={match[1]} PreTag="div"
                           children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    },
    h3(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) {
      return <h3 style={{color: 'red'}} {...props} />
    }

  }

  return <div style={{margin: '0 30px'}}>
    <ReactMarkDown children={md} components={components}/>
  </div>
}
