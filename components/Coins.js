import styles from '../styles/Coins.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Coins = ({index, name, id, price, symbol, marketcap, volume, image, priceChange }) => {
    const router = useRouter()
    const handleClick =(id)=>{  
       router.push(`/coin/${id}`)
    }

    return (
        <tr onClick={()=>handleClick(`${id}`)} style={{cursor:"pointer"}}>    
     

       <td>{index + 1}</td>
           
      <td><img src={image} alt={name} className={styles.coin__img} /></td>

        <td> {name}</td>

         <td>{symbol}</td>  
                      
         <td><p>${price}</p></td>

        <td>${volume.toLocaleString()}</td>


            <td> {priceChange.toFixed(2)}</td>                
                           
                            <td> Mkt Cap: ${marketcap.toLocaleString()} </td>
        </tr>
       
    )
}

export default Coins
