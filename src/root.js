import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Navbar from './components/Navbar';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Navbar,
	errorBoundary(err, info, props) {
		return <h3>Error in MF navbar</h3>;
	},
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;