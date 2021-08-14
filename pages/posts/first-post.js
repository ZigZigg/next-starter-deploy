import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

const asyncFunction = () =>{
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve('halooo')
    }, 4000)
  })
}

export const getStaticProps = async () =>{
  await asyncFunction()

  return {
    props:{}
  }
}