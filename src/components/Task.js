import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Task= ()=>{

   
    
    return(
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    )
}
