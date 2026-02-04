import { describe, test } from "node:test";
import assert from "node:assert";
import variables_env from "../utils/variables_env.js";

const API_URL = `http://localhost:${variables_env.PORT || 8080}/api/adoptions`;

describe("Adoptions API Tests", () => {

    test("GET /api/adoptions - debe retornar todas las adopciones", async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        assert.equal(response.status, 200);
        // Validamos que payload sea un array (aunque esté vacío)
        assert.ok(Array.isArray(data.payload));
    });

    test("GET /api/adoptions/:aid - debe retornar 404 para ID inexistente", async () => {
        const fakeAid = "65f1e2d3c4b5a69788776655";
        const response = await fetch(`${API_URL}/${fakeAid}`);
        
        // Aquí no hacemos .json() si esperamos un 404 que quizás no envíe JSON
        assert.equal(response.status, 404);
    });

    test("POST /api/adoptions/:uid/:pid - DEBERÍA fallar si los IDs no existen en DB", async () => {
        const uid = "65f1e2d3c4b5a69788776655";
        const pid = "65f1e2d3c4b5a69799886644";
        const response = await fetch(`${API_URL}/${uid}/${pid}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });

        // Como los ID tienen formato correcto pero no existen debería ser 404
        assert.equal(response.status, 404);
    });

    test("POST /api/adoptions/:uid/:pid - debe fallar si la mascota no existe", async () => {
        // IDs con formato correcto de 24 caracteres pero inexistentes
        const validFormatUid = "65f1e2d3c4b5a63216578655";
        const validFormatPid = "65f1e2d3c4b5a6978aebc544";
        
        const response = await fetch(`${API_URL}/${validFormatUid}/${validFormatPid}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });

        // El status debería ser 404 (Not Found)
        assert.strictEqual(response.status, 404);
    });
});