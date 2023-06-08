import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(){}
    async signup() {
        return {
            message: 'signup successful'
        }
    }

    async signin() {
    return {
        message: 'signin successful'
    }
    }

    async signout() {
        return {
            message: 'signout successful'
        }
    }
}
