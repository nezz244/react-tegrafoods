import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu, SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}  onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='Discover' onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to='Services' onClick={toggle}> Products</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to='Contact Now'>Contact Us</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;