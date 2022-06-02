import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function Header(props) {
let [headerRateUSD,setHeaderRateUSD] = useState("")
let [headerRateEUR,setHeaderRateEUR] = useState("")

    useEffect(() => {
        let requestOption = {
            headers: {
                "apikey": 'a98VNG9eI83lpjxOSG0c4UgrqKIj52ma'
            }
        }
        axios.get('https://api.apilayer.com/currency_data/convert?to=UAH&from=USD&amount=1', requestOption )
            .then(response => {
                setHeaderRateUSD(response.data.result);
            })
        axios.get('https://api.apilayer.com/currency_data/convert?to=UAH&from=EUR&amount=1', requestOption )
            .then(response => {
                setHeaderRateEUR(response.data.result);
            })
    }, []);


    return (
        <div className="header">
            <p className="headerItem">USD/UAH = {headerRateUSD}</p>
            <p >EUR/UAH = {headerRateEUR}</p>
        </div>
    );
}


export default Header;