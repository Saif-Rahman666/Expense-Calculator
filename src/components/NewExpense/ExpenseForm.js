import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = () => {

    const [enterTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const [enterAmount, setEnteredAmount] = useState('')
    const amountChangeHandler =(event) => {
        setEnteredAmount(event.target.value)
    }
    const [enterDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    return(<form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2022-01-01" max="2022-12-01" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__action'>
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}
export default ExpenseForm