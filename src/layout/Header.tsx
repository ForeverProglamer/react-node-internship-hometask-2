import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HeaderProps = {
  onViewChange: () => void;
};

export default function Header({ onViewChange }: HeaderProps) {
  const views = ['Home', 'Archived'];
  const [viewsActivity, setViewsActivity] = useState([true, false]);

  const toggleActivity = (clickedViewIndex: number) => {
    setViewsActivity((prev) =>
      prev.map((_activity, index) => index === clickedViewIndex),
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const clickedViewIndex = views.indexOf(event.currentTarget.innerText);
    if (viewsActivity[clickedViewIndex]) return;
    toggleActivity(clickedViewIndex);
    onViewChange();
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="border-bottom border-body px-4"
    >
      <Navbar.Brand href="#">
        <FontAwesomeIcon className="me-2" icon={faStickyNote} size="xl" />
        Notes App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto hstack gap-3">
          {views.map((view, index) => (
            <Nav.Link
              key={undefined}
              href="#"
              active={viewsActivity[index]}
              onClick={handleClick}
            >
              {view}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
