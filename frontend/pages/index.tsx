import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchResult from '../components/SearchResult'
import { search } from '../repositories'
import { useState } from 'react'
import { Response } from '../models'

const Home: NextPage = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState<Response | null>(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>Api Mashup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Enter a query and find information!
        </h1>
        <form onSubmit={async (e) => {
          e.preventDefault()
          const res = search(query)
          console.log(await res)
          setData(await res)
        }}>
          <label htmlFor="query">Query
            <input
              type="text"
              value={query}
              placeholder='SQL injection'
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Submit</button>
          </label>
        </form>
        {data && SearchResult(data)}
      </main>

    </div>
  )
}

export default Home