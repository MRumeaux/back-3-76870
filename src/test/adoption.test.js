import { describe, test } from "node:test";
import assert from "node:assert";
import variables_env from "../utils/variables_env";

const API_URL = `http://localhost:${variables_env.PORT||8080}`;

describe("Adoptions API Tests", () => {

    test("GET /api/adoptions - tiene que retornar todas las adopciones", async () => {
        const response = await fetch(`${API_URL}/api/adoptions`);
        const data = await response.json();

        // Se chequea respuesta exitosa
        assert.equal(response.message, "Success");
        assert.equal(response.status, 200);

        // Se chequea que el resultado sea un array
        assert.ok(Array.isArray(data.payload));
    });

    test("GET /api/adoptions/:aid - tiene que retornar una adopción por su ID", async () => {

        // Generamos adopción de prueba
        const newAdoption = {
            userId: "pepe_argento",
            petId: "bola_de_nieve_1"
            };
        
        // Lo posteamos
        const response = await fetch(`${API_URL}/api/adoptions`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newAdoption)
        });
        const createdAdoption = await response.json();
        const adoptionId = createdAdoption.payload._id;

        // Ahora lo buscamos por ID
        const getResponse = await fetch(`${API_URL}/api/adoptions/${adoptionId}`);
        const fetchedAdoption = await getResponse.json();

        // Se chequea respuesta exitosa
        assert.equal(fetchedAdoption.message, "Success");
        assert.equal(fetchedAdoption.status, 201);

        // Se chequea que el resultado sea un objeto
        assert.ok(fetchedAdoption.payload);
        assert.equal(fetchedAdoption.payload.userId, newAdoption.userId);
        assert.equal(fetchedAdoption.payload.petId, newAdoption.petId);
    });

    test("POST /api/adoptions/:pid/:uid - tiene que crear una nueva adopción usando params", async () => {
        const userId = "lionel_scaloni";
        const petId = "beckham";
        const response = await fetch(`${API_URL}/api/adoptions/${userId}/${petId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const createdAdoption = await response.json();

        // Se chequea respuesta exitosa
        assert.equal(createdAdoption.message, "Success");
        assert.equal(createdAdoption.status, 201);
        
        // Se chequea que el resultado sea un objeto
        assert.ok(createdAdoption.payload);
        assert.equal(createdAdoption.payload.userId, userId);
        assert.equal(createdAdoption.payload.petId, petId);
    });
});