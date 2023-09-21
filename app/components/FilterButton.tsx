import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaMinusCircle } from 'react-icons/fa';

const FilterButton = ({ filter, updateButtonState}) => {
  return (
    filter?.added ? 
        <button onClick={() => updateButtonState(filter?.code)} className='flex gap-x-2 items-center m-2 p-2 rounded-xl bg-slate-500 shrink-0'><span><FaMinusCircle/></span>{filter?.title}</button> : <button onClick={() => updateButtonState(filter?.code)} className='flex gap-x-2 items-center m-2 p-2 rounded-xl bg-red-500 shrink-0'><span><BsFillPlusCircleFill/></span>{filter?.title}</button>
  );
}

export default FilterButton