import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

import './App.css';

function Header({seciliUrunler,sepetiBosalt}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
  return (
    <div>
      <Navbar color="light" light expand="md" className='ps-5 pe-5 bg-info'>
        <NavbarBrand href="/" className="mr-auto">SHOPİFY</NavbarBrand>
        <NavbarToggler  className="ml-auto" />
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav className="ml-auto " navbar>
            
            <NavItem>
              <NavLink href="#">Ürünler</NavLink>
            </NavItem>
            <NavLink href="#">Hakkımızda</NavLink>
            <NavLink href="#">İletişim</NavLink>
            <UncontrolledDropdown nav inNavbar className='ml-auto'>
                  <DropdownToggle nav caret className='genis-dropdown-toggle'>
                    Sepet 
                  </DropdownToggle>
                  <DropdownMenu right className="text-right genis-dropdown-menu">

                  {seciliUrunler.map(
                    (item)=>(
                      <DropdownItem>
                        {item.ad} - {item.fiyat}
                      </DropdownItem>
                    )
                    
                   )
                  }
    
                    <DropdownItem>
                      Toplam: 
                    </DropdownItem>              
                    <DropdownItem>
                      <button className="btn btn-success btn-sm" >
                        Sepet Onayla
                      </button>{' '}
                     
                    </DropdownItem>
                    <div>
                    <Button className='ms-3 mt-1'
                      onClick={()=>{sepetiBosalt()}}
                      color="warning"
                    >
                      Sepeti Sil
                    </Button>
                  </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;