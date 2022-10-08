import  './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import {useState} from 'react'
import ExpensesFilter from './ExpensesFilter'

function ExpenseItem(props){

   const [title,setTitle] = useState(props.title) 
   const clickHandler = () => {
       setTitle('Updated');
       console.log(title)
   }
    return (
        <div>
            
        <Card className='expense-item'>
        <ExpensesFilter/>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>
                    {title}
                </h2>

                <div className='expense-item__price'>
                    ${props.amount}
                </div>
                <button onClick={clickHandler}>Update</button>
            </div>
            
        </Card>
        </div>
    )
}
export default ExpenseItem