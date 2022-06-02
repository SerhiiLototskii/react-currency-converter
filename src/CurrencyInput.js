import PropTypes from "prop-types";
import './currencyInput.css';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CurrencyInput(props) {
    return (
        <div className="group">
            <TextField
                className="input"
                id="outlined-name"
                label="Please enter a number"
                value={props.amount}
                onChange={ev => props.onAmountChange(ev.target.value)}
                type="number"
                color="secondary"
            />
            <Select
                className="select"
                value={props.currency}
                onChange={ev => props.onCurrencyChange(ev.target.value)}
                color="secondary"
            >
                {props.currencies.map((currency => (
                    <MenuItem value={currency}>{currency}</MenuItem>
                )))}
            </Select>

        </div>
    );
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;