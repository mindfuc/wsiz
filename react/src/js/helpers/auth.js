import React from 'react';

export function isLogged() {
	if(localStorage.getItem('currentUser')) {
		return true;
	} else {
		return false;
	}
}
