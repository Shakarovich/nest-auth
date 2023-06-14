import {Controller, Post, Body} from '@nestjs/common';
import {PostsDto} from "./dto";
import {PostsService} from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post('/createPost')
    createPost (@Body() dto: PostsDto) {
        return this.postsService.createPost(dto);
    }
}
