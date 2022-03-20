import { useState } from 'react';
import Coins from './Coins';

const CoinList = ({ coinsData }) => {

    const Heads=[
        "Id",
        "Image",
        "Name",
        "Symbol",
        "price",
        "Volume",
        "PriceChange",
        "Marketcap",     
    ]
    return (
        <>
        <div className='table-responsive'>
        <table className='table'>
            <thead>
                <tr>
                    {Heads.map((head)=>{
                        return(
                        <th key={head}>{head}</th>
                        )
                    }

                    )}
                  
                </tr>
            </thead>

       <tbody>
       
            {coinsData.map((coin,index) => {
                return (
                   
                    <Coins 
                   index={index}
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                    
                   
                )
            })}
         
         
          
            </tbody>
             </table>
             </div>
        </>
    )
}

export default CoinList