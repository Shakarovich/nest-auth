import {Controller, Post, Body, Get, HttpCode, HttpStatus, Param, Put, ParseIntPipe, Delete} from '@nestjs/common';
import {editPostDto, PostsDto} from "./dto";
import {PostsService} from "./posts.service";
import {DeletePost, Posts} from "./type/posts.type"

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post('/createPost')
    @HttpCode(HttpStatus.CREATED)
    createPost (@Body() dto: PostsDto): Promise<Posts> {
        return this.postsService.createPost(dto);
    }
    @Get('/getAllPosts')
    @HttpCode(HttpStatus.OK)
    getAllPosts (): Promise<Posts[]> {
        return this.postsService.getAllPosts();
    }

    @Get('/getPostById/:id')
    @HttpCode(HttpStatus.OK)

    getPostById (
        @Param('id', ParseIntPipe) postId:number,
    ): Promise<Posts> {
        return this.postsService.getPostById(postId);
    }

    @Put('/updatePost/:id')
    @HttpCode(HttpStatus.OK)
    updatePost (
        @Param('id', ParseIntPipe) postId: number,
        @Body() dto:editPostDto,
    ): Promise<Posts> {
        return this.postsService.updatePostById(postId, dto);
    }

    @Delete('/deletePost/:id')
    @HttpCode(HttpStatus.OK)
    deletePost (
        @Param('id', ParseIntPipe) postId:number,
        ): Promise<DeletePost> {
        return this.postsService.deletePost(postId);
    }
}
