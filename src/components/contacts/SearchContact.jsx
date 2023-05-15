import { CgSortAz } from 'react-icons/cg'
import MyInput from '../input/MyInput';

const SearchContact = () => {
    return ( 
        <div className="w-full h-14 flex justify-between gap-3 items-center pl-2 pr-2">
            <MyInput placeholder="Поиск или новый чат"/>
            <button className='flex justify-start items-center text-gray-400 text-2xl font-bold hover:text-gray-200 transition'>
                <CgSortAz/>
            </button>
        </div>
     );
}
 
export default SearchContact;