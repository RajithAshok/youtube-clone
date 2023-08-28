import {useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography,Box, Stack } from '@mui/material';
import { Video } from './';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  return (
    <Box minHeight="95vh">
      <stack direction ={{ xs:'column',md: 'row'}}>
        <Box flex ={1}>
          <Box sx={{ width: '100%', position : 'sticky',top: '86px'}}>
            <ReactPlayer/>

          </Box>

        </Box>
      </stack>

    </Box>
  )
}

export default VideoDetail