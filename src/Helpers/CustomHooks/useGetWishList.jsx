import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishList } from '../../Actions/UserA';

const useGetWishList = () => {
    const { Authenticated } = useSelector((Store) => Store.LoginSignupReducer);
    const { WishList } = useSelector((Store) => Store.WishListReducer);
    const Dispatch = useDispatch();

    useEffect(() => {
        if (Authenticated && !WishList) 
            Dispatch(GetWishList())
        
    }, [Authenticated, WishList, Dispatch])
}

export default useGetWishList