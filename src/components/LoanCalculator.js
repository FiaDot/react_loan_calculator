import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ApartmentIcon from '@material-ui/icons/Apartment';
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";
import Slider from '@material-ui/core/Slider';
import Grid from "@material-ui/core/Grid";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from "@material-ui/lab/AlertTitle";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const LoanCalculator = () => {
    const classes = useStyles();

    const [inputs, setInputs] = useState({
        // amount: '',
        // period: '',
        // rate: '',
        // result: '',
        amount: '4.0',
        period: '30',
        rate: '2.7',
        result:'',
    });
    const {amount, period, rate, result} = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        //setText('');
        setInputs({
            amount: '4.0',
            period: '30',
            rate: '2.7',
            result:'',
        });
    };

    const onCalculate = () => {
        console.log('amount=' + amount);
        console.log('period=' + period);
        console.log('rate=' + rate);

        let L = amount * 100000000;
        let M = rate * 0.01 / 12;
        let K = period * 12;

        // console.log('L=' + L);
        // console.log('M=' + M);
        // console.log('K=' + K);

        let p1 = (L * M);
        let p2 = Math.pow((1 + M),  K);
        let p3 = Math.pow((1+M), K)-1;
        let p  = p1*p2/p3;

        // console.log('p1='+p1);
        // console.log('p2='+p2);
        // console.log('p3='+p3);
        console.log('p='+p);


        const numberWithCommas = (x) =>{
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        const output = numberWithCommas(parseInt(p)) + '원 / 월';

        setInputs({
            ...inputs,
            result: output
        });
    }

    const handleChange = name => (e, value) => {
        //console.log('handleChange v=' + value + ' name='+name);

        setInputs({
            ...inputs,
            [name]: value
        });
    };

    function valuetext(value) {
        console.log(value);
        // setInputs({
        //     ...inputs,
        //     amount: value
        // });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <ApartmentIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    대출계산기
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="amount"
                        label="대출액(억)"
                        name="amount"
                        autoComplete="amount"
                        autoFocus
                        value={amount}
                        onChange={onChange}
                    />

                    <Slider
                        defaultValue={1.0}
                        //getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        min={0.1}
                        max={10.0}
                        value={amount}
                        onChange={handleChange("amount")}
                        // valueLabelDisplay="on"
                    />


                    {/*<Grid container spacing={3}>*/}
                    {/*    <Grid item xs={3}>*/}
                    {/*        <Button type="submit"*/}
                    {/*                fullWidth*/}
                    {/*                variant="contained"*/}
                    {/*                className={classes.submit}*/}
                    {/*                onClick={onAddAmount(1.0)}*/}
                    {/*        >*/}
                    {/*            1억*/}
                    {/*        </Button>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}


                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="period"
                        label="기간(년)"
                        id="period"
                        autoComplete="period"
                        value={period}
                        onChange={onChange}
                    />

                    <Slider
                        defaultValue={30}
                        //getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={5}
                        min={5}
                        max={30}
                        value={period}
                        onChange={handleChange("period")}
                        // valueLabelDisplay="on"
                    />

                    {/*<Grid*/}
                    {/*    container*/}
                    {/*    direction="row"*/}
                    {/*    justify="space-evenly"*/}
                    {/*    alignItems="center"*/}
                    {/*>*/}
                    {/*        <Button variant="outlined" value="10" onClick={handleChange("period")}>10년</Button>*/}
                    {/*        <Button variant="outlined">20년</Button>*/}
                    {/*        <Button variant="outlined">30년</Button>*/}
                    {/*</Grid>*/}

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="rate"
                        label="이율(년)"
                        id="rate"
                        autoComplete="rate"
                        value={rate}
                        onChange={onChange}
                    />

                    <Slider
                        defaultValue={2.7}
                        //getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={0.1}
                        min={0.1}
                        max={5.0}
                        value={rate}
                        onChange={handleChange("rate")}
                        // valueLabelDisplay="on"
                    />

                    {/*<FormControl component="fieldset">*/}
                    {/*    <FormLabel component="legend">기간</FormLabel>*/}
                    {/*    <RadioGroup aria-label="gender" name="period" >*/}
                    {/*        <FormControlLabel value="10" control={<Radio />} label="10년" />*/}
                    {/*        <FormControlLabel value="20" control={<Radio />} label="20년" />*/}
                    {/*        <FormControlLabel value="30" control={<Radio />} label="30년" />*/}
                    {/*    </RadioGroup>*/}
                    {/*</FormControl>*/}

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onCalculate}
                    >
                        계산
                    </Button>


                    <Button
                        type="reset"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        className={classes.reset}
                        onClick={onReset}
                    >
                        초기화
                    </Button>

                </form>

                <Box component="span" m={2}>

                </Box>


                {result &&
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <Alert severity="warning">
                            <Typography component="h1" variant="h4">
                                {result}
                            </Typography>
                        </Alert>

                    </Grid>
                }


            </div>

            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default LoanCalculator;