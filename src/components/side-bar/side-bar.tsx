import { StyledSidebar,ImageContainer } from "./sidebar.styles";




type SidebarProps = {
  picture: string;
  selectPicture: (picture: string) => string;
};

const Sidebar = ({ picture, selectPicture }: SidebarProps) => {
  return (   
    
      <StyledSidebar onClick={() => selectPicture(picture)} >
      <ImageContainer>  
      <img src={picture} />
      </ImageContainer>
      </StyledSidebar>
      
       
  );
};

export default Sidebar;
