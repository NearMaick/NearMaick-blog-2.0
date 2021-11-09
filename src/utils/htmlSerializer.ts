/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
import { Elements } from 'prismic-reactjs'
import React from 'react'

// -- Function to add unique key to props
const propsWithUniqueKey = function (props: {}, key: any) {
  return Object.assign(props || {}, { key })
}

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
export const htmlSerializer = function (
  type: any,
  element: { url: any; alt: any; data: { target: any; url: any } },
  content: any,
  children: {} | null | undefined,
  key: any
) {
  var props = {}
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      props = { className: 'paragraph-class' }
      return React.createElement('p', propsWithUniqueKey(props, key), children)

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = { src: element.url, alt: element.alt || '' }
      return React.createElement('img', propsWithUniqueKey(props, key))

    case Elements.preformatted:
      // Preformatted
      props = Object.assign({
        style: {
          color: '#C53030',
          padding: '4rem 0 4rem',
          'line-height': '2.5rem',
        },
      })
      return React.createElement(
        'pre',
        propsWithUniqueKey(props, key),
        children
      )

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {}
      const relAttr = element.data.target ? { rel: 'noopener' } : {}
      props = Object.assign(
        {
          style: { color: '#C53030' },
          href: element.data.url || linkResolver(),
        },
        targetAttr,
        relAttr
      )
      return React.createElement('a', propsWithUniqueKey(props, key), children)

    // Return null to stick with the default behavior
    default:
      return null
  }
}
function linkResolver(): any {
  throw new Error('Function not implemented.')
}
