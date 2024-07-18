import { Switch } from "@mui/material";


const Header = ({mode,handleChange}) => {
    return(
        <>
        <div className="items-center flex justify-center ">
            <div className="mt-10 font-bold text-3xl">

            <h1>React Crud Operation</h1>
            </div>
            <div className="absolute right-0 mr-10 mt-10">
            <Switch
          checked={mode}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
            </div>
        </div>
        </>
    )
}

export default Header;