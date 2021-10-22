import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs', () => {
    test('debe de traer 10 elementos ',async () => {
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBe( 10 );
    })
    
    test('debe tener vacia la categoria', async() => {
        const gifs = await getGifs(''); //arreglo vacio
        expect(gifs.length).toBe( 0 );
    })

})