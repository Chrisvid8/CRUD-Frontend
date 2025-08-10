import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ position: 'relative' }}>
      <Search size={20} style={{
        position: 'absolute',
        top: '33%',
        left: '10px',
        transform: 'translateY(-50%)',
        color: '#888'
      }} />
      <input
        type="text"
        placeholder='Search by name'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='search-input'
        style={{ paddingLeft: '35px' }}
      />
    </div>
  );
}