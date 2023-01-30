/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { PrivateRoutes } from "../Router/PrivateRoutes";
import { AuthContext } from "../auth/Context/AuthContexto";

describe("Test del componente <PrivateRoutes/>",()=>{
    test("Si no esta autenticado debe mostrar el children",()=>{


        Storage.prototype.setItem=jest.fn();

        const user={
            logged:true,
            user:'Alejandro'
        }

        render(<AuthContext.Provider value={{user}}>
            <MemoryRouter>
                <PrivateRoutes>
                    <h1>Ruta privada</h1>
                </PrivateRoutes>
            </MemoryRouter>
        </AuthContext.Provider>)
        
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
    });
});