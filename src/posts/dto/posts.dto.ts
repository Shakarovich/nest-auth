import {IsNotEmpty, IsString} from "class-validator";

export class PostsDto {
    @IsString()
    @IsNotEmpty()
   readonly title: string;


    @IsString()
    @IsNotEmpty()
   readonly description: string;
}