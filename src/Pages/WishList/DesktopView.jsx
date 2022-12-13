import React from 'react'
import { AddToCart, RemoveProduct } from './Components/AddAndRemoveProduct'
import { ProductPrice, TotalPrice } from './Components/Prices'
import { Title } from './Components/Titles'
const DesktopView = () => {
    let thStyle = `border-[#CFCFCF] border-[1px] border-solid text-center px-3 lg:px-6 bg-[#F5F5FF] pt-11 pb-5 
  text-2xs lg:text-xs xl:text-sm 
            Boldfont`
    return (
        <table className='w-3/4 border-collapse hidden md:table'>
            <thead>
                <tr>
                    <th className={`${thStyle} w-[30%]`}>Title</th>
                    <th className={`${thStyle} w-[13.5%]`}>Price</th>
                    <th className={`${thStyle} w-[5%] xl:w-[13.5%]`}>Remove</th>
                    <th className={`${thStyle} w-[33.5%] xl:w-[30%]`}>Add To Cart</th>
                    <th className={`${thStyle} w-[13%]`}>Total Price</th>

                </tr>
            </thead>

            <tbody>
                <tr className='bg-[#DCFAFF]'>
                    <Title />
                    <ProductPrice />
                    <RemoveProduct />

                    <AddToCart />
                    <TotalPrice />
                </tr>
                <tr>
                    <td className='text-center text-base py-3' colSpan={5}>There is no product in in WishList.</td>
                </tr>
            </tbody>
        </table>
    )
}

export default DesktopView