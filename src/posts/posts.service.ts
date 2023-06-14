import { Injectable } from '@nestjs/common';
import {PostsDto} from "./dto";
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
}
