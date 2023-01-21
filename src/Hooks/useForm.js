import { useState } from "react";

export const useForm=(estructura)=>{
    const [form, setform] = useState(estructura)

    const InputChange=({target})=>{
        const {value,name}=target;
        setform({
            ...form,
            [name]:value
        })

    };

    const ResetForm=(evento)=>{
        setform(estructura);
    }


    return{
        form,
        InputChange,
        ResetForm
    }

}