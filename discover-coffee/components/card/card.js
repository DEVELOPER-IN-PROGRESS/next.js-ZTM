
import styles from './card.module.css'
import Image  from 'next/image';
import Link from 'next/link'
import cls from 'classnames' 
 const  Card = (props) => {
  return (
       <Link href={props.href}>
          <a className={styles.cardLink}>
           <div className={cls("glass",styles.container)}>
               <h2 className={styles.cardHeader}>{props.name}</h2>
               
               <div className={styles.cardImageWrapper}>
                  <Image 
                     alt={props.name}
                     className={styles.cardLink} 
                     src={props.imgUrl} 
                     width={260} 
                     height={160} 
                    /> 
               </div>
            </div>
          </a>
      </Link>
  );
};

export default Card ; 