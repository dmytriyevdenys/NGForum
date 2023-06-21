import style from './NavigationButton.module.css'


const NavigationButton = ({icon: IconComponent}) => { 
    return (
        <button className={style.button}>
            <IconComponent className={style.icon}  />
        </button>
    )
}

export default NavigationButton