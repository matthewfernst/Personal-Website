import React, {useRef, useState} from 'react';

import {Avatar, Box, Button, Grid, Paper} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Profile from '../static/images/profile.jpg';

import BootUp from './BootUp';
import TerminalEmbed from './TerminalEmbed';

const DesktopLayout = props =>
{
	const [bootingUp, setBootingUp] = useState(true);
	const [open, setOpen] = useState(false);

	let inputRef = useRef();

	return (
		<Box width={'100vw'} height={'100vh'}>
			<Box p={8} style={{width: '100%', height: '100%', overflow: 'hidden'}}
				 onClick={() => inputRef.current.focus()}>
				<div style={{position: 'relative'}}>
					<Grid container style={{position: 'absolute', top: 0, right: 0}} direction={'column'}
						  justify={'flex-end'} alignItems={'flex-end'} spacing={2}>
						<Grid item>
							<Avatar
								alt="Max Rosoff"
								src={Profile}
								onClick={() => setOpen(!open)}
							/>
						</Grid>
						{
							open ?
								<Grid item>
									<UserCard open={open} {...props} />
								</Grid> : null
						}
					</Grid>
				</div>
				<div style={{width: '100%', height: '100%', overflowY: 'scroll'}}>

					{
						bootingUp ?
							<BootUp setBootingUp={setBootingUp}/> :
							<TerminalEmbed ref={inputRef}/>
					}
				</div>
			</Box>
		</Box>
	);
};

const UserCard = props =>
{
	return (
		<Paper elevation={3} style={{width: 350, height: 265}}>
			<Box p={3} style={{position: 'relative', height: '100%'}}>
				<Buttons {...props} />
			</Box>
		</Paper>
	);
};

const Buttons = () =>
{
	return (
		<Grid container alignContent={'center'} style={{height: '100%'}}>
			<Grid item>
				<Grid container spacing={1}>
					<Grid item>
						<Grid container spacing={2}>
							<Grid item>
								<LinkButtonWithIcon href={'https://www.instagram.com/matthew.f.ernst/'}
													icon={<InstagramIcon/>}>
									Instagram
								</LinkButtonWithIcon>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item>
								<LinkButtonWithIcon href={'https://www.linkedin.com/in/matthew-f-ernst/'}
													icon={<LinkedInIcon/>}>
									LinkedIn
								</LinkButtonWithIcon>
							</Grid>
							<Grid item>
								<LinkButtonWithIcon href={'https://github.com/matthewfernst'} icon={<GitHubIcon/>}>
									GitHub
								</LinkButtonWithIcon>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export const LinkButtonWithIcon = props =>
{
	return (
		<Button
			href={props.href}
			target="_blank"
			rel="noopener"
			className={props.className ? props.className : ''}
			startIcon={props.icon}
		>
			{props.children}
		</Button>
	);
};


export default DesktopLayout;
