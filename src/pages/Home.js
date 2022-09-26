import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import styled from "styled-components";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {
    return(
        <Box>
            <Grid container spacing={1}>
                <Grid item>
                    <Item>dsasdadsa</Item>
                </Grid>

            </Grid>
        </Box>
    )
};

export default Home