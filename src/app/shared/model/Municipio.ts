export interface Municipio {

    id: number;
    nome: string;
    estado: {
        id: number
        nome: string
        sigla: string
    };  
    latitude: number;
    longitude: number;
    capital: boolean;
    
}