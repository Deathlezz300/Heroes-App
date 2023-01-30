/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { AppRouter } from "../Router/AppRouter";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContext } from "../auth/Context/AuthContexto";
describe("Pruebas en componente <AppRouter/>",()=>{
    test("Debe de mostrar el login si no estoy autenticado",()=>{

        const user={
            user:{
                logged:false
            }
        }

        render(<AuthContext.Provider value={user}>
            <MemoryRouter initialEntries={['/marvel']}>
                <AppRouter/>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getAllByText('Inicio de sesion').length).toBe(1);

    });

    test("Debe regresar a marvel si esta logeado",()=>{
        const user={
            user:{
                logged:true
            }
        }

        render(<AuthContext.Provider value={user}>
            <MemoryRouter initialEntries={['/login']}>
                <AppRouter/>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })


});