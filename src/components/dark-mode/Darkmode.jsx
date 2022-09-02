import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../redux/actions";
import "./Darkmode.css"

const Darkmode = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();


    const handleToggle = (e) => {
        let theme = e.target.checked ? "dark" : "light";
        dispatch(setTheme(theme))
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className={theme === "dark" ? "icon-darkmode" : "icon-lightmode"}>
                <span className="material-symbols-outlined p-2">
                    light_mode
                </span>
            </div>
            <label className="switch">
                <input type="checkbox" onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <div className={theme === "light" ? "icon-lightmode" : "icon-darkmode"}>
                <span className="material-symbols-outlined p-2" >
                    dark_mode
                </span>
            </div>
        </div>
    );
}

export default Darkmode;