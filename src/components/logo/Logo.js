import styles from "../../styles/Logo.module.css"
import LogoIcon from "../../assets/Group 25.svg"

const Logo = () => {


    return( 
    <div className={styles.logo}>
        <LogoIcon style={{width: '60px'}}/>
        <div className={styles.logo_name}>Dua.ru</div>
    </div>
    )
}



export default Logo