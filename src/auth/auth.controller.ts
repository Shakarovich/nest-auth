import {Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Req} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthDto} from "./dto";
import {Tokens} from "./types";
import {RtGuard} from "../common/guards";
import {GetCurrentUser, GetCurrentUserId, Public} from "../common/decorator";
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @Public()
    @Post('/local/signup')
    @HttpCode(HttpStatus.CREATED)
    signupLocal(@Body() dto: AuthDto): Promise<Tokens>{
      return  this.authService.signUpLocal(dto)
    }

    @Public()
    @Post('/local/signin')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() dto: AuthDto): Promise<Tokens>{
      return  this.authService.signInLocal(dto)
    }


    @Post('/logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserId() userId: number): Promise<string> {
        return this.authService.logout(userId)
    }

    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
        @GetCurrentUserId() userId: number,
        @GetCurrentUser('refreshToken') refreshToken: string,
    ): Promise<Tokens> {
        return this.authService.refreshTokens(userId, refreshToken);
    }
}