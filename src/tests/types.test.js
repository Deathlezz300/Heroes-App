/** @jest-environment jsdom */
import { types } from "../auth/Types/type";
describe("Test para archivo types",()=>{
    test("Debe retornar el valor del type login",()=>{

        const login=types.login;

        expect(login).toBe('[Auth] Login');

    });

    test("Debe retornar el valor type del logout",()=>{

        const logout=types.logout;

        expect(logout).toBe('[Auth] Logout');

    });


});