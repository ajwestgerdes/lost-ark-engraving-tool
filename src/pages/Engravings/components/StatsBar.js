import { useState, useContext, useEffect } from "react"
import {} from "@mui/material"
import { AccessoryContext } from "../../../util/Context";


export const StatsBar = (props) => {
    const ctx = useContext(AccessoryContext)
    
    let crit = ctx.accessoryContext.necklace.stats.Crit +
        ctx.accessoryContext.earring1.stats.Crit +
        ctx.accessoryContext.earring2.stats.Crit +
        ctx.accessoryContext.ring1.stats.Crit +
        ctx.accessoryContext.ring2.stats.Crit

    let swift = ctx.accessoryContext.necklace.stats.Swift +
        ctx.accessoryContext.earring1.stats.Swift +
        ctx.accessoryContext.earring2.stats.Swift +
        ctx.accessoryContext.ring1.stats.Swift +
        ctx.accessoryContext.ring2.stats.Swift
    
    let spec = ctx.accessoryContext.necklace.stats.Spec +
        ctx.accessoryContext.earring1.stats.Spec +
        ctx.accessoryContext.earring2.stats.Spec +
        ctx.accessoryContext.ring1.stats.Spec +
        ctx.accessoryContext.ring2.stats.Spec
    
    console.log(crit)

    //need to find a good way to add up all the stats here to display

    return (
        <div>
            <div>Crit: {crit}</div>
            <div>Swift: {swift}</div>
            <div>Spec: {spec}</div>
            <div>Endurance: {crit}</div>
            <div>Experties: {crit}</div>
            <div>Domination: {crit}</div>
        </div>  
    )
    
}