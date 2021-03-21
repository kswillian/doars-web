import { Storage } from 'src/app/shared/util/Storage';
import { JwtHelperService } from '@auth0/angular-jwt';

export class Utils {

    storage: Storage = new Storage();
    jwtHelperService: JwtHelperService = new JwtHelperService();

    prepareFildError(field: string[], message: string[]) {
        let messageFormat: string[] = [];
        for (let i = 0; i < field.length; i++) {
            messageFormat.push("Campo " + field[i] + ", " + message[i]);
        }
        return messageFormat;
    }

    getSubJwt(): string {
        let bearer_token = this.storage.getAccessTokenToLocalStorage();
        return this.jwtHelperService.decodeToken(bearer_token.token).sub;
    }

}