import Grid from "@mui/material/Grid"

export default function DevicesContainer(props) {
    return (
        <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ paddingBottom: '30px' }}>{ props.children }</Grid>
    )
}
