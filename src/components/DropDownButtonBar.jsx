import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
function DropDownButtonBar() {
    return (
        <>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Clienti
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Tutti i Clienti</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2" autoClose="inside">
                <Dropdown.Toggle id="dropdown-autoclose-inside">
                    Appuntamenti
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle id="dropdown-autoclose-outside">
                    Trattamenti
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2" autoClose={false}>
                <Dropdown.Toggle id="dropdown-autoclose-false">
                    Operatori
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default DropDownButtonBar;