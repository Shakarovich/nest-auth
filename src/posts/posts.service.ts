import {ForbiddenException, Injectable} from '@nestjs/common';
import {PostsDto, editPostDto} from "./dto";
import {PrismaService} from "../prisma/prisma.service";


@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService){}

    async createPost(dto:PostsDto) {
       const post =  await this.prisma.posts.create({
            data: {
                title: dto.title,
                description: dto.description
            }
        })
        return post
    }

     async getAllPosts() {
        const getAll = await this.prisma.posts.findMany({});
        return getAll
    }

    async getPostById (
        postId:number
    ) {

        const post = await this.prisma.posts.findUnique({
            where: {
                id: postId
            }
        })

        if(!post) {
            throw new ForbiddenException(
                "Post not found with that id"
            )
        }
         const getPostById = await this.prisma.posts.findUnique({
             where: {
                id: postId
            }
         })
         return getPostById

    }

    async updatePostById (
        postId: number,
        dto: editPostDto
    ) {

        const post = await this.prisma.posts.findUnique({
            where: {
                id: postId
            }
        })

        if(!post) {
            throw new ForbiddenException(
                "Post not found with that id"
            )
        }

        const updatePostById = await this.prisma.posts.update({
            where: {
                id: postId
            },
            data: {
                ...dto
            }
        });
        return updatePostById
    }

    async deletePost (postId: number) {

        const post = await this.prisma.posts.findUnique({
            where: {
                id: postId
            }
        })

        if(!post) {
            throw new ForbiddenException(
                "Post not found with that id"
            )
        }

        await this.prisma.posts.delete({
            where: {
                id: postId
            }
        })
        return {
            message: `Successfully deleted post with id:${postId}`
        }
    }
}
