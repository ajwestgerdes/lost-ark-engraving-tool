import { useState, useContext, useEffect } from "react"
import {} from "@mui/material"
import { AccessoryContext } from "../util/Context";


export const StatsBar = (props) => {
    const [value, setValue] = useState(0);
    const [dropdownValue, setDropDownValue] = useState('')
    const ctx = useContext(AccessoryContext)

    console.log(ctx)

    //need to find a good way to add up all the stats here to display

    return <div>Crit: </div>
}