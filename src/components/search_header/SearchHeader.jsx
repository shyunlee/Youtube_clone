import styles from './search_header.module.css'
import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {

  const inputRef = useRef()

  const handleSearch = (value) => {
    onSearch(value)
    inputRef.current.value=''
  }

  const pressHandle = (event) => {
    if (event.key === 'Enter') {
      const value = inputRef.current.value
      handleSearch(value)
    }
  }

  const clickHandle = () => {
    const value = inputRef.current.value
    handleSearch(value)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo_img} src="/images/logo.png" alt="logo"/>
        <h1 className={styles.logo_title}>Sean Youtube</h1>
      </div>
        <input ref={inputRef} className={styles.input} type="search" placeholder="Search.." onKeyPress={pressHandle}/>
        <button className={styles.search_btn} type="submit" onClick={clickHandle}>
          <img className={styles.search_img} src="/images/search.png" alt="search" />
        </button>
    </header>
  )
}

export default SearchHeader;