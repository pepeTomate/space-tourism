import { Typography } from '@mui/material';
import React from 'react';
export interface CrewViewInterface {}

const CrewView : React.FC<CrewViewInterface> = () => {
	return (
		<>
			<Typography variant='h3'>
				CrewView
			</Typography>
		</>
	);
};

export default CrewView;
