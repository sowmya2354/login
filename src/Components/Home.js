import Box from '@mui/material/Box';
import React from 'react';

function Home() {
  return (
    <div>
       <Box
        sx={{
          width: 100,
          height: 100,
          bgcolor: 'blue', // Example of using a predefined color
          color: 'white',
          p: 2,
          textAlign: 'center',
        }}
      >
       LOGIN
      </Box>
    </div>
  );
}

export default Home;
