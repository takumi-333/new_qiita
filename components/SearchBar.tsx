'use client';

import { Query } from "@/type";
import React, { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ( { onSearch } : { onSearch : ( query : Query) => void}) => {
    const [title, setTitle] = useState<string>("");

    const handleTitleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleSearch = () => {
        const query: Query = {
            numPage: 1,
            title: title?title:undefined,
        }
        onSearch(query)
    }

    return (
        <div className="w-full flex flex-raw items-center gap-2">
            <input 
                className="placeholder:text-gray-500 border border-gray-200 outline-2 text-sm rounded-sm w-1/3 pl-1"
                type="text" 
                value={title}
                onChange={handleTitleInputChange} 
                placeholder="タイトルから検索"
            />
            <button onClick={handleSearch} className="bg-gray-200 hover:bg-gray-300 rounded-sm lg:text-2xl text-xl"><IoIosSearch/></button>
        </div>
    );
}

export default SearchBar;