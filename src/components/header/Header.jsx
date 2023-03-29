import React, { useEffect, useState } from 'react';

const Header = ({inputValue}) => {
    const [search , setSearch] = useState('');
    

    
    


    return (
        <div className='bg-white'>
            <div className="navbar max-w-7xl m-auto">
                <div className="flex-1">
                    <h1 className='text-slate-700 font-bold text-5xl'>MealDB</h1>
                </div>
                <div className="flex-none gap-2">
                    <div className="flex gap-1">
                        <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="input bg-slate-200 text-black input-bordered" />
                        <button onClick={()=>inputValue(search)} className='btn btn-info'>Search</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;