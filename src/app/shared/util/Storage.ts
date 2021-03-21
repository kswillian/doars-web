import { LoginDTO } from '../model/LoginDTO';

export class Storage {

    storage: string = "access_token";

    addAccessTokenToLocalStorage(loginDTO: LoginDTO){
        let tokenDTOString = JSON.stringify(loginDTO);
        localStorage.setItem(this.storage, tokenDTOString);
    }

    addAccessTokenToSessionStorage(loginDTO: LoginDTO){
        let tokenDTOString = JSON.stringify(loginDTO);
        sessionStorage.setItem(this.storage, tokenDTOString);
    }

    getAccessTokenToLocalStorage(): LoginDTO{
        return JSON.parse(localStorage.getItem(this.storage));
    }

    getAccessTokenToSessionStorage(): LoginDTO{
        return JSON.parse(sessionStorage.getItem(this.storage));
    }

    removeAccessTokenToLocalStorage(): void{
        localStorage.removeItem(this.storage);
    }

    removeAccessTokenToSessionStorage(): void{
        sessionStorage.removeItem(this.storage);
    }


}