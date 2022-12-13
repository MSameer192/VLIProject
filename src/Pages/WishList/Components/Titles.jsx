export function Title() {
    return <td className='border-[1px] border-solid border-[#CFCFCF] py-2 px-2'>
      <span className='flex gap-3 w-full justify-center items-start lg:items-center'>
        <span className='w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36'>
          <img className='w-full' src={require('../Assets/CourseImage.png')} alt="" />
        </span>
        <span className='flex flex-col gap-6'>
          <h3 className='text-2xs lg:text-2xs xl:text-sm 2xl:text-base whitespace-nowrap SemiBold'>Vehicle Mechanics</h3>
          <p className='text-6xs max-w-[200px] max-h-[70px] overflow-hidden SemiBold'>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </span>
      </span>
    </td>
  }
  
  
  