import React from 'react';

const Rank = ({name,entry}) =>{
	return(
		<>
		<div className=' coll f3 tc'>{`${name}, your entry count is`}</div>
		<div className=' coll f2 tc'>{`${entry}`}</div>

		</>
		);

}

export default Rank;