import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

export default function DynamicPost() {
  return (
    <Layout>
      <Head>
        <title>DynamicPost</title>
      </Head>
      <h1>DynamicPost</h1>
      <h2>
        <Link href="/">
          <a>DynamicPost</a>
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}