import { TbApi } from 'react-icons/tb'

const ClearSelect = () => {
    return ( 
        <div className="
        w-screen 
        h-screen 
        sm:w-chat 
        flex 
        flex-col 
        justify-center 
        items-center 
        text-gray-400
        bg-slate-800">
            <TbApi className='text-9xl'/>
            <h3>Выберите чат</h3>
        </div>
     );
}
 
export default ClearSelect;