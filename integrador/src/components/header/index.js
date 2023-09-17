import  logo  from '../../images/logo1.png'
import { HeaderButton, HeaderStyled, LogoImage } from './styled';

const Header = ({ buttonName, onClick }) => {
    return (
      <HeaderStyled>
      <LogoImage src={logo} alt="Logo" />
      <HeaderButton onClick={onClick}>{buttonName}</HeaderButton>
    </HeaderStyled>
    );
  };
  
  export default Header;
