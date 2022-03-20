import React from 'react';
import CollectionCards from './CollectionCard';
import './Punklist.css'

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return ( 
  <div className='punkList'>
  {punkListData.map(punk => (
      <div onClick={() => setSelectedPunk(punk.token_id)}>
        <CollectionCards 
            key = {punk.token_id}
            id = {punk.token_id}
            name = {punk.name}
            traits = {punk.traits}
            image = {punk.image_url}
        />
      </div>
  ))}
  </div> 
    );
};

export default Punklist;
