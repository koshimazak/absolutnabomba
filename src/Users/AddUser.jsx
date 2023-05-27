import React, {useState} from 'react'; 
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css' ;
import ErrorModal from '../UI/ErrorModal' ;

const AddUser = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [errorModal, setErrorModal] = useState(null);

    function nameChangeHandler(event){
        setEnteredName(event.target.value) ;
        
    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value) ;
        console.log(enteredAge) ;
    }

    function emailChangeHandler(event){
        setEnteredEmail(event.target.value) ;
        console.log(enteredAge) ;
    }

    function passwordChangeHandler(event){
        setEnteredPassword(event.target.value) ;
        console.log(enteredAge) ;
    }

    function addUserHandler(event){
        event.preventDefault();

        if (+enteredAge < 1){
            setErrorModal({
                title:"Błędnie podany wiek",
                msg:"Wiek musi być > 0"
            })
        }

        if (enteredEmail.includes("@")==false){
            setErrorModal({
                title:"Błędnie podany email",
                msg:"Email musi zawierać adres po '@'"
            })
        }

        setEnteredName('');
        setEnteredAge('');
        setEnteredEmail('');
        setEnteredPassword('');
    }

    function errorHandler(event){
        setErrorModal(null)
    }

    return(
        <>
        {errorModal && <ErrorModal 
                        title={errorModal.title} 
                        msg={errorModal.msg} 
                        onConfirm={errorHandler}
                        /> }
    <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor="username"> UserName</label>
            <input  id="username" 
                    type="text" 
                    onChange={nameChangeHandler}
                    value={enteredName}
                    />

            <label htmlFor="age"> Age (years) </label>
            <input  id="age" 
                    type="Number"
                    onChange={ageChangeHandler}
                    value={enteredAge}
            />

            <label htmlFor="email"> Email (name@example.x) </label>
            <input  id="email" 
                    type="text"
                    onChange={emailChangeHandler}
                    value={enteredEmail}
            />

            <label htmlFor="password"> password </label>
            <input  id="password" 
                    type="password"
                    onChange={paswordChangeHandler}
                    value={enteredPassword}
            />

            <Button type="submit" onPress={() => {sendData(username,age,email,password)}}> Add PrincePolo</Button>
        </form>
    </Card>
    </>
    );
}

export default AddUser;
