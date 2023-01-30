/** @jest-environment jsdom */
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { NavBar } from "../heroes/Components/NavBar";
import { AuthContext } from "../auth/Context/AuthContexto";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate=jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}));

describe("Test para el componenten <NavBar/>",()=>{
    
    const contextValue={
        user:{
            logged:true,
            user:'Alejandro'
        },
        logout:jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks());

    test("Debe de mostrar el nombre del usuario que esta logeado",()=>{
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(screen.getByText('Alejandro')).toBeTruthy();
    });

    test("Debe llamar el logout y el navigate hacia el login",()=>{
        render(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <NavBar/>
            </MemoryRouter>
        </AuthContext.Provider>);

        const logOutBtn=screen.getByLabelText('salir');
        fireEvent.click(logOutBtn);

        expect(contextValue.logout).toHaveBeenCalled();

        expect(mockedUseNavigate).toHaveBeenCalledWith('/',{'replace':true})

    });

});