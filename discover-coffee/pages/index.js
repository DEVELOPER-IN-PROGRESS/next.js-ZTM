import Head from 'next/head'

import Banner from '../components/banner/banner'
import Card from '../components/card/card' ;
 
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetchCoffeeStores } from '../lib/coffee-store';
import useGeoLocation from '../hooks/uselocation';
import { useEffect } from 'react';


export async function getStaticProps(){
  console.log('inside getStaticProps function ')

  const coffeeStores = await fetchCoffeeStores() ; 

  
  return {
    props :{
      coffeeStores: coffeeStores, 
    }, 
  }
  
}


export default function Home(props) {
  console.log(props);

  const {handleLocation ,latLong , lErrorMsg  , isFindingLocation } =  useGeoLocation() ; 
  console.log({latLong , lErrorMsg}) ; 

  useEffect( async() =>{
      if(latLong){
         try {
           const fetchedCoffeeStores = await fetchCoffeeStores(latLong) ;

           console.log("aspet", { fetchedCoffeeStores });
         }
         catch(error){
           console.error({error});
         }
      }
  },[latLong]) ;

  const changeButton = () => {
    console.log('Button clicked');
      handleLocation() ; 
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText={ isFindingLocation ? "Locating ..." : "View stores nearby "} handleOnClick={changeButton}/>
         
        { lErrorMsg && <p>Something went wrong: {lErrorMsg}</p>  }
         <div className={styles.heroImage}>
         {/* {coffeeStoresError && <p>Something went wrong: {coffeeStoresError}</p>} */}

        <Image src="/static/hero-image.png" width={700} height={400}/>
        </div>

        {props.coffeeStores.length >0 && (
        <div className={styles.sectionWrapper}>
        <h2 className={styles.heading2}>Toronto Stores</h2>

        <div className={styles.cardLayout}>
          {
            props.coffeeStores.map( (coffeestore)=>{
               return(<Card 
                key={coffeestore.id}
               name={coffeestore.name}
                href = {`/coffee-store/${coffeestore.id}`}
                 imgUrl={coffeestore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} 
               className={styles.card}
             />) ;
              })}
        </div>  
          </div> )}

      </main>
    </div>
  )
}
