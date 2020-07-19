
import Link from "next/link";

export default function SideBar(){
 
    return(
      
        <div className="flex-initial text-gray-700 text-left border-r min-h-screen w-1/6 px-4 py-2 m-2">
          <ul className=" text-sm">
            <li className='my-2'>
              <Link href="/dashboard/orders">
              <a className="text-gray-700  text-base font-medium ">
                 <i className='fa fa-shopping-bag mr-2'></i> Orders</a>
              </Link>
            </li>
            <li className='flex flex-row'>
              
              <Link href="/dashboard/products">
                <a className="text-gray-700  text-base font-medium ">
                 <i className='fa fa-users '></i> Products</a>
              </Link>
            </li>

           
          </ul>
        </div>
     
    )


}