import styled from '@emotion/styled';

export const ButtonList = styled.ul`
list-style:none;
display: flex;
flex-direction: row;
margin: 0 auto;
padding: 0;`

export const ListItem = styled.li`
&:not(:last-child) {
	margin-right: 15px;
}`

export const ButtonOption = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  position:relative;
  background: #0099FF;
  border: none;
  z-index: 1;

&:hover {
  color: #000;
}

&:hover:after {
  left: 0;
  width: 100%;
}


`;