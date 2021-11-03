import Head from 'next/head'

import Banner from '../components/banner/banner'
import Card from '../components/card/card' ;
import coffeeStoresData from '../data/coffee-stores.json' ;

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps(context){
  console.log('inside getStaticProps function ')
  //const data = fetch()
  return {
    props :{
      coffeeStores:coffeeStoresData , 
    }, 
  }
}


export default function Home(props) {
  console.log(props);
  const changeButton = () => {
    console.log('Button clicked');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby " handleOnClick={changeButton}/>
         <div className={styles.heroImage}>
        <Image src="/static/hero-image.png" width={700} height={400}/>
        </div>

        {props.coffeeStores.length >0 && (
        <>
        <h2 className={styles.heading2}>Toronto Stores</h2>

        <div className={styles.cardLayout}>
          {
            props.coffeeStores.map( (coffeestore)=>{
               return(<Card 
                key={coffeestore.id}
               name={coffeestore.name}
                href = {`/coffee-store/${coffeestore.id}`}
                 imgUrl={coffeestore.imgUrl} 
               className={styles.card}
             />) ;
              })}
        </div>  
          </> )}

      </main>
    </div>
  )
}
