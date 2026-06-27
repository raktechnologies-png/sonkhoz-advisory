import { useEffect } from 'react'

function setMetaTag(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function useDocumentMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) {
      document.title = title
      setMetaTag('property', 'og:title', title)
      setMetaTag('name', 'twitter:title', title)
    }

    if (description) {
      setMetaTag('name', 'description', description)
      setMetaTag('property', 'og:description', description)
      setMetaTag('name', 'twitter:description', description)
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
      setMetaTag('property', 'og:url', canonical)
    }
  }, [title, description, canonical])
}
