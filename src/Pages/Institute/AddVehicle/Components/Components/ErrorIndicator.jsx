function ErrorIndicator({ Error }) {
    return Error ? <span className='bg-[#FFC06A] rounded-full p-4 absolute -right-3 -top-3 flex w-fit border-white border-solid z-10'>
        <img className='w-[5px] absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2' src={require('../../Assets/Error.svg').default} alt="" />
    </span>
        : null
}
export default ErrorIndicator