import React from 'react';
import Nav from 'react-bootstrap/Nav';

const TopNav = () => {
  return (
    <Nav activeKey="/">
      <Nav.Item>
        <Nav.Link href="/">Spotify Playlist Viz</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TopNav;
