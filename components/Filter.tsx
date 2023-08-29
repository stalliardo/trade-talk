"use client";

import SelectMenu from './SelectMenu';
import { filterOptions } from '@consts';
import { useEffect, useState } from 'react';

const Filter = ({filterSelected}: {filterSelected: (filter: string) => void}) => {

    const [selected, setselected] = useState("All");

    useEffect(() => {
        filterSelected(selected);
    }, [selected])

    return (
        <div className='w-1/4 h-fit'>
            <SelectMenu options={filterOptions} value={selected} classes='w-full' onChange={(option) => { setselected(option) }} />
        </div>
    )
}

export default Filter;
