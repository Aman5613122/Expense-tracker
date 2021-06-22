import React, {createContext, useReducer} from "react";
import AppReducer from "./app_reducer";
import axios from 'axios';

const intialState = {
    transactions:[],
    error:null,
    loading:true
}

export const GlobalContext = createContext(intialState);

//provider
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,intialState);

    //action

    async function getTransactions(){
        try{
            const res = await axios.get('api/v1/transaction/get');
            dispatch({
                type:'GET_TRANSACTION',
                payload: res.data.data,
            })
        }
        catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err,
            })
        }
    }

   async function deleteTransaction(id) {
        try{
            await axios.delete(`api/v1/transaction/${id}`);
            dispatch({
                type:'DELETE_TRANSACTION',
                payload: id
            })
        }
        catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err,
            })
        }
        
    }

    async function addTransaction(transaction) {
        const config = {
            headers:{
                'Context-Type':'application/json'
            }
        }

        try{
          const res =  await axios.post("api/v1/transaction/add",transaction,config);
          dispatch({
            type:'ADD_TRANSACTION',
            payload: res.data.data,
        })
        }
        catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err,
            })
        }
        
    }


    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            error:state.error,
            loading:state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    );
}