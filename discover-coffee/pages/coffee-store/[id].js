import {useRouter} from 'next/router' ;
import Link from 'next/link'  ; 

const CoffeeStore = () => {
   const router = useRouter();
   console.log("router" , router); 
 return (
    <div> 
            <Link href="/">
               <a>Back to Home</a>
            </Link>
            <Link href="/coffee-store/dynamic">
               <a>   Go to dynamic route</a>
            </Link>
         <div>Coffee Store Page </div>
    </div>
 );
}; 


export default CoffeeStore ;