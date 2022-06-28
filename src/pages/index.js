import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const IndexPage = props => {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, settimeout] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState('is-loading')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    })
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleOpenArticle = article => {
    setIsArticleVisible(!isArticleVisible)

    setTimeout(() => {
      settimeout(!timeout)
      setArticle(article)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(!articleTimeout)
    }, 350)
  }

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout)

    setTimeout(() => {
      settimeout(!timeout)
    }, 325)

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible)
      setArticle('')
    }, 350)
  }

  const handleClickOutside = () => {
    if (isArticleVisible) {
      handleCloseArticle()
    }
  }

  return (
    <Layout location={props.location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
