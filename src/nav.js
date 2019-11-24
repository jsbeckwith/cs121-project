import React from 'react';
import './universalStyle.scss';
import Tooltip from '@material-ui/core/Tooltip';

class Nav extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<nav>
				<a href="/homepage">
					<Tooltip title="Home" placement="right">
						<button className="nav-button">
								<svg id="home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39.994">
										<path id="house" d="M1108,452.006a1.631,1.631,0,0,1-.484,1.182,1.412,1.412,0,0,1-.317.22,3.656,3.656,0,0,1-2.533,1.923H1103v13.333a3.333,3.333,0,0,1-3.333,3.333h-23.333a3.333,3.333,0,0,1-3.333-3.333V455.331h-1.667a3.333,3.333,0,0,1-3.317-3.237c0-.025-.017-.05-.017-.075V452h0a1.617,1.617,0,0,1,.483-1.11l18.167-18.177a.877.877,0,0,1,.167-.238,1.728,1.728,0,0,1,2.367,0,.892.892,0,0,1,.167.24l18.167,18.175A1.617,1.617,0,0,1,1108,452h0Zm-21.667,16.667h3.333v-8.333h-3.333Zm1.667-32.7L1071.967,452h4.367v16.667H1083v-10a1.667,1.667,0,0,1,1.667-1.667h6.667a1.667,1.667,0,0,1,1.667,1.667v10h6.667V452h4.366Z" transform="translate(-1068 -432.004)" fill="#a498d3" fill-rule="evenodd"/>
								</svg>
						</button>
					</Tooltip>
				</a>
				<a href="/newEntryPage">
					<Tooltip title="Make Entry" placement="right">
						<button className="nav-button">
							<svg id="write" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40.027">
									<path id="write" d="M1464.667,232.011h-33.333a3.333,3.333,0,0,1-3.333-3.333V195.344a3.333,3.333,0,0,1,3.333-3.333h21.35l-3.333,3.333h-18.017v33.333h33.333V210.666l3.333-3.333v21.345A3.333,3.333,0,0,1,1464.667,232.011Zm-20-8.333-8.317.023-.017-8.357,22.583-22.4a3.27,3.27,0,0,1,4.633,0l3.467,3.483a3.284,3.284,0,0,1,0,4.647Zm-5-3.333h5l-5-5Zm21.567-25.075L1443,213.678l3.333,3.333,18.367-18.258Z" transform="translate(-1428 -191.984)" fill="#a498d3" fill-rule="evenodd"/>
							</svg>
						</button>
					</Tooltip>
				</a>
				<a href="/calendarPage">
					<Tooltip title="Calendar" placement="right">
						<button className="nav-button">
							<svg id="calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
									<path id="calendar" d="M1104.667,136h-33.333a3.333,3.333,0,0,1-3.333-3.333v-30a3.333,3.333,0,0,1,3.333-3.333h3.333v3.333h-3.333v30h33.333v-30h-3.333V99.333h3.333a3.333,3.333,0,0,1,3.333,3.333v30A3.333,3.333,0,0,1,1104.667,136Zm-8.333-11.667h3.333a1.667,1.667,0,0,1,0,3.333h-3.333a1.667,1.667,0,0,1,0-3.333Zm0-6.667h3.333a1.667,1.667,0,0,1,0,3.333h-3.333a1.667,1.667,0,0,1,0-3.333Zm3.333-3.333h-3.333a1.667,1.667,0,0,1,0-3.333h3.333a1.667,1.667,0,0,1,0,3.333ZM1098,106a1.667,1.667,0,0,1-1.667-1.667V97.667a1.667,1.667,0,0,1,3.333,0v6.667A1.667,1.667,0,0,1,1098,106Zm-6.667-6.667h3.333v3.333h-3.333Zm-5,25h3.333a1.667,1.667,0,0,1,0,3.333h-3.333a1.667,1.667,0,0,1,0-3.333Zm0-6.667h3.333a1.667,1.667,0,0,1,0,3.333h-3.333a1.667,1.667,0,0,1,0-3.333Zm3.333-3.333h-3.333a1.667,1.667,0,0,1,0-3.333h3.333a1.667,1.667,0,0,1,0,3.333ZM1088,106a1.667,1.667,0,0,1-1.667-1.667V97.667a1.667,1.667,0,0,1,3.333,0v6.667A1.667,1.667,0,0,1,1088,106Zm-6.667-6.667h3.333v3.333h-3.333Zm-5,25h3.333a1.667,1.667,0,0,1,0,3.333h-3.333a1.667,1.667,0,0,1,0-3.333Zm0-6.667h3.333a1.667,1.667,0,0,1,0,3.333h-3.333a1.667,1.667,0,0,1,0-3.333Zm3.333-3.333h-3.333a1.667,1.667,0,0,1,0-3.333h3.333a1.667,1.667,0,0,1,0,3.333ZM1078,106a1.667,1.667,0,0,1-1.667-1.667V97.667a1.667,1.667,0,0,1,3.333,0v6.667A1.667,1.667,0,0,1,1078,106Z" transform="translate(-1068 -96)" fill="#a498d3" fill-rule="evenodd"/>
							</svg>
						</button>
					</Tooltip>
				</a>
				{/* add a tag below when settings page implemented */}
					<Tooltip title="Settings" placement="right">
						<button className="nav-button">
							<svg id="settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 39.998">
									<path id="gear" d="M1179.867,454.326a2.445,2.445,0,0,1-2.417,2.167h-.333a2.688,2.688,0,0,0-1.783,4.688,2.475,2.475,0,0,1,.267,3.351,19.733,19.733,0,0,1-3.25,3.2,2.45,2.45,0,0,1-1.5.522,2.489,2.489,0,0,1-1.817-.795,2.865,2.865,0,0,0-2.083-.868,2.517,2.517,0,0,0-.933.175,2.723,2.723,0,0,0-1.667,2.6,2.46,2.46,0,0,1-2.183,2.523,19.934,19.934,0,0,1-4.5-.012,2.438,2.438,0,0,1-2.15-2.578,2.727,2.727,0,0,0-1.65-2.642,2.5,2.5,0,0,0-.95-.182,2.877,2.877,0,0,0-2.083.867,2.465,2.465,0,0,1-3.367.267,19.759,19.759,0,0,1-3.15-3.2,2.431,2.431,0,0,1,.267-3.317,2.732,2.732,0,0,0,.683-3.015,2.666,2.666,0,0,0-2.416-1.667h-.1a2.62,2.62,0,0,1-2.616-2.175,18.873,18.873,0,0,1,0-4.548,2.42,2.42,0,0,1,2.5-2.167,2.885,2.885,0,0,0,2.717-1.643,2.706,2.706,0,0,0-.683-3.038,2.474,2.474,0,0,1-.267-3.35,20.038,20.038,0,0,1,3.233-3.2,2.51,2.51,0,0,1,1.516-.522,2.48,2.48,0,0,1,1.817.8,2.881,2.881,0,0,0,2.083.862,2.547,2.547,0,0,0,.933-.167,2.726,2.726,0,0,0,1.666-2.6,2.458,2.458,0,0,1,2.184-2.52,20.022,20.022,0,0,1,4.5.012,2.44,2.44,0,0,1,2.15,2.576,2.706,2.706,0,0,0,1.65,2.645,2.538,2.538,0,0,0,.95.18,2.882,2.882,0,0,0,2.083-.865,2.453,2.453,0,0,1,3.35-.27,19.574,19.574,0,0,1,3.167,3.2,2.442,2.442,0,0,1-.267,3.333,2.687,2.687,0,0,0,1.85,4.678,2.617,2.617,0,0,1,2.6,2.166A19.784,19.784,0,0,1,1179.867,454.326Zm-3.3-3.872a5.36,5.36,0,0,1-3.733-9.078,16.035,16.035,0,0,0-2.167-2.192,5.586,5.586,0,0,1-3.817,1.5,5.1,5.1,0,0,1-1.983-.388,5.378,5.378,0,0,1-3.283-4.911,16.709,16.709,0,0,0-3.083,0,5.035,5.035,0,0,1-3.45,4.5,4.86,4.86,0,0,1-1.834.695,5.586,5.586,0,0,1-3.8-1.485,16.165,16.165,0,0,0-2.233,2.195,5.376,5.376,0,0,1,1.1,5.806,5.5,5.5,0,0,1-4.9,3.276,17.884,17.884,0,0,0-.017,3.133,5.352,5.352,0,0,1,3.733,9.081,18.1,18.1,0,0,0,2.167,2.193,5.644,5.644,0,0,1,3.817-1.5,5.127,5.127,0,0,1,2,.39,5.366,5.366,0,0,1,3.283,4.908,16.573,16.573,0,0,0,3.083,0,5.412,5.412,0,0,1,3.317-4.821,5.167,5.167,0,0,1,1.95-.373,5.6,5.6,0,0,1,3.817,1.487,17.563,17.563,0,0,0,2.233-2.195,5.345,5.345,0,0,1-1.1-5.806,5.423,5.423,0,0,1,4.9-3.29,16.306,16.306,0,0,0,0-3.131Zm-16.566,8.2a6.676,6.676,0,1,1,6.65-6.676A6.676,6.676,0,0,1,1160,458.659Zm0-9.986a3.331,3.331,0,1,0,2.368.969,3.333,3.333,0,0,0-2.368-.969Z" transform="translate(-1139.998 -432.01)" fill="#a498d3" fill-rule="evenodd"/>
							</svg>
						</button>
					</Tooltip>
			</nav>
		);
	}
}

export default Nav;