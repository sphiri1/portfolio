import * as React from 'react';
import '../Cursor/cursor.css';
import './Home.css';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Code from '@mui/icons-material/GitHub';
import Language from '@mui/icons-material/Language';
import { Link } from '@mui/material';


export default function Home(){

    return(
      <div className='h-container'>
    <Box sx={{ flexGrow: 1 }} className="box-overlay">
      <Grid container className="box-overlay">


        {/* Name  */}
        <Grid xs={6} md={3} className='grid-overlay greetings'>
          <div className='p-card '>
              <div className='p-card-title'>
                <p className='intro'>Hey, I'm</p>
              </div>
              <div className='p-card-content'>
                <h1 className='name p-intro-name'>Shannil Phiri
                </h1>
              </div>
          </div>
        </Grid>


        {/* Project1 */}
        <Grid xs={6} md={3} className='grid-overlay' sx={{backgroundColor: "#454582"}}>
              <div className='p-card'>
                <div className='p-card-title'>
                  <h2 className='name project-title'>To Do App</h2>
                </div>
                <div className='p-card-content'>
                  <p className='p-card-inner'>This is a to do app that tracks the user's progress
                    and tasks
                  </p>
                  <Stack direction="row" spacing={1} className='pill-overlay'>
                    <Chip label="Firebase" className='pill' />
                    <Chip label="HTML" className='pill' />
                    <Chip label="Bootstrap" className='pill' />
                  </Stack>
                </div>
                <div className='p-card-buttons'>
                  <Stack direction="row" className='links'>
                    <IconButton aria-label="fingerprint" sx={{color: "#5d7487"}}>
                      <Link href='https://sphiri1.github.io/DOM-events/' target="_blank" color={'inherit'}><Language /></Link>
                    </IconButton>
                    <IconButton aria-label="code" sx={{color: '#8c58b6'}}>
                      <Link href='https://github.com/sphiri1/DOM-events' target="_blank" color={'inherit'}><Code /></Link>
                    </IconButton>
                  </Stack>
              </div>
          </div>
        </Grid>


        {/* Contact */}
        <Grid xs={6} md={3} className='grid-overlay' sx={{backgroundColor: "#4fa2a2"}}>
        <div className='p-card'>
              <div className='p-card-title'>
                <h1 className='name contact'>Contact Me
                </h1>
              </div>
          </div>
        </Grid>


        {/* Project2 */}
        <Grid xs={6} md={3} className='grid-overlay' sx={{backgroundColor: "#d176b7"}}>
          <div className='p-card'>
                <div className='p-card-title'>
                  <h2 className='name project-title'>Face Detector</h2>
                </div>
                <div className='p-card-content'>
                  <p className='p-card-inner'>This is a web application that detects a single face in a picture
                  </p>
                  <Stack direction="row" spacing={1} className='pill-overlay'>
                    <Chip label="Clarifai-api" className='pill' />
                    <Chip label="Firebase" className='pill' />
                    <Chip label="React" className='pill' />
                  </Stack>
                </div>
                <div className='p-card-buttons'>
                  <Stack direction="row" spacing={1} className='links'>
                    <IconButton aria-label="fingerprint" sx={{color: "#5d7487"}}>
                      <Link href='https://sphiri1.github.io/face-recognition/' target="_blank" color={'inherit'}><Language /></Link>
                    </IconButton>
                    <IconButton aria-label="code" sx={{color: '#8c58b6'}}>
                      <Link href='https://github.com/sphiri1/face-recognition' target="_blank" color={'inherit'}><Code /></Link>
                    </IconButton>
                  </Stack>
              </div>
          </div>
        </Grid>


          {/* Project3 */}
          <Grid xs={6} md={3} className='grid-overlay' sx={{backgroundColor: "#c5a580"}}>
          <div className='p-card'>
                <div className='p-card-title'>
                  <h2 className='name project-title'>StartUp Website</h2>
                </div>
                <div className='p-card-content'>
                  <p className='p-card-inner'>A simple startup website template
                  </p>
                  <Stack direction="row" spacing={1} className='pill-overlay'>
                    <Chip label="HTML" className='pill' />
                    <Chip label="CSS-grid" className='pill' />
                  </Stack>
                </div>
                <div className='p-card-buttons'>
                  <Stack direction="row" spacing={1} className='links'>
                    <IconButton aria-label="fingerprint" sx={{color: "#5d7487"}}>
                      <Link href='https://sphiri1.github.io/startup-students/' target="_blank" color={'inherit'}><Language /></Link>
                    </IconButton>
                    <IconButton aria-label="code" sx={{color: '#8c58b6'}}>
                      <Link href='https://github.com/sphiri1/startup-students' target="_blank" color={'inherit'}><Code /></Link>
                    </IconButton>
                  </Stack>
              </div>
          </div>
          </Grid>


          {/* About Me */}
          <Grid xs={6} md={3} className='grid-overlay' sx={{backgroundColor: "#c99a85"}}>
            <div className='p-card'>
              <div className='p-card-title'>
                <h1 className='name abt'>About Me
                </h1>
              </div>
          </div>
          </Grid>


          {/* Project4 */}
          <Grid xs={6} md={3} className='grid-overlay position' sx={{backgroundColor: "#cb7070"}}>
          <div className='p-card'>
                <div className='p-card-title'>
                  <h2 className='name project-title'>Teacher's Dashboard</h2>
                </div>
                <div className='p-card-content'>
                  <p className='p-card-inner'>A web app created for online teachers to keep track of their hours, work
                  and students
                  </p>
                  <Stack direction="row" spacing={1} className='pill-overlay'>
                    <Chip label="React" className='pill' />
                    <Chip label="Firebase" className='pill' />
                  </Stack>
                </div>
                <div className='p-card-buttons'>
                  <Stack direction="row" spacing={1} className='links'>
                    <IconButton aria-label="fingerprint" sx={{color: "#5d7487"}}>
                      <Link href='https://sphiri1.github.io/face-recognition/' target="_blank" color={'inherit'}><Language /></Link>
                    </IconButton>
                    <IconButton aria-label="code" sx={{color: '#8c58b6'}}>
                      <Link href='https://github.com/sphiri1/face-recognition' target="_blank" color={'inherit'}><Code /></Link>
                    </IconButton>
                  </Stack>
              </div>
          </div>
          </Grid>


          {/* Position */}
          <Grid xs={6} md={3} className='grid-overlay position'>
            <div className='p-card'>
            <div className='p-card-title'>
                <h1 className='name fr-end'>Front-end </h1>
                 <h1 className='name fr-end' style={{paddingRight: '2vw'}}>Developer
                </h1>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
