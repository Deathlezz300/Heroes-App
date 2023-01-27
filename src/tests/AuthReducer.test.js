/** @jest-environment jsdom */
import { AuthReducer } from "../auth/Context/authReducer";
import { types } from "../auth/Types/type";

describe("Test en AuthReducer",()=>{

    test("debe retornar el estado por defecto",()=>{

        const initial={
            user:'',
            logged:false
        }

        const state=AuthReducer(initial,{});

        expect(state).toBe(initial);
    });

    test("Debe de llamar el login y autenticar el usuario",()=>{

        const usuario={
            logged:true,
            user:'Alejandro'
        }

        const state=AuthReducer({},{type:types.login,payload:usuario});

        expect(state).toEqual(usuario);

    });

    test("Debe el logout borrar el name del usuario y cambiar el logged a false",()=>{

        const usuario={
            logged:true,
            user:'Alejandro'
        };

        const state=AuthReducer(usuario,{type:types.logout});

        expect(state).toEqual({logged:false})


    });

});