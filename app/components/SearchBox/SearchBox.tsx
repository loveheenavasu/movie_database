import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBox: React.FC = () => (
  <div className='w-1/2 flex items-center'>
    <Search placeholder="Search" enterButton allowClear  loading={false}/>
  </div>
);

export default SearchBox;