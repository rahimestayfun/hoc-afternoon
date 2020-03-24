import React, {Component} from 'react';
import CurrencyDisplay from './CurrencyDisplay';

const withCurrency=(BaseComponent)=>{
    return class Currency extends Component{
            state={
                currencyChosen:false,
                selectedCurrency: 'Select Currency',
                amount:0
            }
    
        handleIncrease = () =>{
            this.setState(prevState=>{
                return {
                    amount: prevState.amount+1
                }
            })
        }
        handleDecrease = () =>{
            this.setState(prevState=>{
                if(prevState.amount >0){
                    return{
                        amount:prevState.amount-1
                    }
                }
            })
        }
      
        handleOptionSelect = (e) => {
			const userValue = e.target.value
			this.setState(() => {
				return {
					selectedCurrency: userValue,
					currencyChosen: userValue === 'Select Currency' ? false : true
				}
			})
		}
        render(){
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
                { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
            ]
            const mappedCurrency = currencyData.map((el,i) => <option key={el.id} value={i}> {el.name} </option>)
            return(
            <div className="container">
                <select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
                    <option value="Select Currency">Select Currency</option>
                    {mappedCurrency}
                </select>
                <div>
                <button onClick={this.handleIncrease} disabled={!this.state.currencyChosen} className="add">+</button>
                <button onClick={this.handleDecrease} disabled={!this.state.currencyChosen} className="minus">-</button>
                </div>

                {this.state.currencyChosen?
                <BaseComponent
                currency = {currencyData[this.state.selectedCurrency]}
                amount={this.state.amount}    
                />
                : 'please select'
                }
            </div>
            )
        }
    }
}

const ExchangedCurrency = withCurrency(CurrencyDisplay);
export default ExchangedCurrency;