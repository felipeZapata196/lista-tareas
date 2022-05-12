import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Task= ()=>{

    const taskStyles = {
        border: 'solid 1px #eee',
        boxShadow: '5px 5px 5px rgb(0, 0, 0, 0.1)',
        minWidth: '28%',
        height: '23vh',
        padding: '10px 15px',
        borderRadius: '5px',
        backgroundColor:'white',
    }
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
