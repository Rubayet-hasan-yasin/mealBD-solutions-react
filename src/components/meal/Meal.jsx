import React from 'react';
import Card from '../Card/Card';

const Meal = ({datas}) => {
    return (
        <>
        <div className='grid grid-cols-3 my-28 gap-y-14 justify-items-center'>
            {
                datas.map(data=> <Card key={data.idMeal} data={data}></Card>)

            }

        </div>
        <div>

        </div>
        </>
    );
};

export default Meal;