import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
        <title>Grid Animation with Framer Motion</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />  
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </Head>
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}

export default Layout
