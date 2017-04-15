import React from 'react';
import Navbar from 'react-navbar';

const Header = () => (
	<nav className="navbar navbar-custom navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="index.html" className="navbar-brand">ParkPoints</a>
            </div>
			<div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
					<li><a href="/profile">Profile</a></li>
					<li><a href="/parks">Tacoma Parks</a></li>
					<li><a href="/event">Upcoming Events</a></li>
					<li><a href="/settings">Settings</a></li>
					<li><a href="/about">Contact us</a></li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Header;
