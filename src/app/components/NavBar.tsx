import NavStyles from '../components/navbar.module.css'
import NavButton from "../components/NavButton"
import { useState } from 'react';
import { clsx } from 'clsx';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (props: { navButtons: any[]; }) => {
 
const [collapse, setCollapse] = useState(true)


return (
<div className={NavStyles.OuterBox}>

<FontAwesomeIcon icon={faBars} 
  onClick={()=>{{setCollapse(!collapse)}}} 
  className={NavStyles.icon}/>

  <div  className={clsx({
        [NavStyles.visible]: !collapse,
        [NavStyles.collapsed]: collapse
      })}>
  
  {props.navButtons.map((button: { path: any; label: any}) => (
    <NavButton
      key={button.path}
      path={button.path}
      label={button.label}
    />
  ))}

  </div>

  
  <div className={NavStyles.Menu}>
  
      {props.navButtons.map((button: { path: any; label: any}) => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
        />
      ))}
  
  </div>
</div>
)
 
}

export default NavBar;