import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import ApartmentIcon from '@material-ui/icons/Apartment';
import {Copyright} from "@material-ui/icons";
import Box from "@material-ui/core/Box";

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
        amount: '',
        period: '',
        rate: '',
        result: ''
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
            amount: '1.0',
            period: '1',
            rate: '3',
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

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <ApartmentIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Loan Calculator
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

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="rate"
                        label="이율"
                        id="rate"
                        autoComplete="rate"
                        value={rate}
                        onChange={onChange}
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


                    <Typography component="h1" variant="h5">
                        {result}
                    </Typography>

                </form>
            </div>
        </Container>
    );
}

export default LoanCalculator;