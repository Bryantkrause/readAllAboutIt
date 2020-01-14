import React from 'react'

const ArticleContext = React.createContext({
    title: '',
    words: '',
    saveMe: () => {},
    inputChange: () => {},
    getArticles: () => {}
})

export default ArticleContext