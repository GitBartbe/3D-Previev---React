import styled from "styled-components";

export const StyledSidebar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p {
  color: white;
  font-family: open sans, Arial, Helvetica Neue, sans-serif;
  margin: 5px 0 10px;
  text-align: center;
}
`

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
margin: 10px 0;
width: 100px;
height: 100px;
border-radius: 15px;

-webkit-box-shadow: -9px 3px 8px -4px rgba(0, 0, 0, 0.19);
-moz-box-shadow: -9px 3px 8px -4px rgba(0, 0, 0, 0.19);
box-shadow: -9px 3px 8px -4px rgba(0, 0, 0, 0.19);

transition:all .5s ease;
overflow: hidden;
cursor: pointer;
&:hover
{
 width: 120px;
 height: 120px;
}

img {
 width: 200px;
 
    
   
}

  
`;


