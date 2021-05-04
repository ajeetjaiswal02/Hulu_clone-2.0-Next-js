import Head from 'next/head'
import Header from '../Components/Header'
import Navigation from '../Components/Navigation'    
import Result from '../Components/Result'
import request from '../util/request'

export default function Home({results}) {
  return ( 
    <div> 
      <Head>
        <title>Hulu Nect js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Navigation */}
      <Navigation />
      {/* Results */}
      <Result results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requests = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: requests.results,
    },
  };
}

