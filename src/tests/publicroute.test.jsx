/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { PublicRoutes } from "../Router/PublicRoutes";
import { AuthContext } from "../auth/Context/AuthContexto";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
describe("Test para componente <PublicRoute/>",()=>{

    test("Si no estoy autenticado debe mostrar el children",()=>{


        const user={
            logged:false
        }

        render(<AuthContext.Provider value={{user}}>
            <PublicRoutes>
                <h1>Ruta publica</h1>
            </PublicRoutes>
        </AuthContext.Provider>)
        
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test("Debe navegar si esta autenticado",()=>{
        
        const user={
            logged:true,
            user:'Alejandro'
        }

        render(
          <AuthContext.Provider value={{ user }}>
            <MemoryRouter initialEntries={["/"]}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicRoutes>
                      <h1>Ruta publica</h1>
                    </PublicRoutes>
                  }
                />
                <Route path="marvel" element={<h1>Marvel</h1>} />
              </Routes>
            </MemoryRouter>
          </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel')).toBeTruthy();

    });

});