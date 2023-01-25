import { useDispatch } from 'react-redux'
import { RemoveFromWishList } from '../../../Actions/UserA';

export function RemoveProduct({WishId}) {
    const Dispatch = useDispatch();
    const RemoveOnlick = () => {
        Dispatch(RemoveFromWishList(WishId))
    }
    return (
        <td className='border-[1px] border-solid border-[#CFCFCF]'>
            <img className='h-8 w-8 relative left-1/2 -translate-x-1/2 cursor-pointer' src={require('../Assets/CrossIcon.svg').default} alt=""
                onClick={RemoveOnlick}
            />
        </td>
    )
}


export function AddToCart() {
    return (
        <td className='border-[1px] border-solid border-[#CFCFCF] px-2'>
            <button className={`w-fit h-fit whitespace-nowrap text-white border-none bg-[#A1A3EF] cursor-pointer rounded-xl shadow-[5px_7px_6px_#00000016] SemiBold relative left-1/2 -translate-x-1/2 
            px-5      md:px-6      lg:px-10     xl:px-14    2xl:px-16 
            text-4xs  md:text-3xs  lg:text-2xs  xl:text-sm  2xl:text-base
            py-4`}
            >
                Add To Cart
            </button>
        </td>
    )
}

