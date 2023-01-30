/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Buscador } from "../heroes/Components/Buscador";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en el componente <Buscador/>",()=>{
    test("Debe mostrar correctamente con valores por defecto",()=>{
        render(<MemoryRouter initialEntries={['/search?q=batman']}>
            <Buscador/>
        </MemoryRouter>)

        const input=screen.getByRole("textbox");
        expect(input.value).toBe('batman');

    })
});