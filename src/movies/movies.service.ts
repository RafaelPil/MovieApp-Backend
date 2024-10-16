import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  create(createMovieInput: CreateMovieInput) {
    return this.prisma.movie.create({
      data: {
        description: createMovieInput.description,
        genre: createMovieInput.genre,
        image: createMovieInput.image,
        imdb: createMovieInput.imdb,
        movieTrailerLink: createMovieInput.movieTrailerLink,
        title: createMovieInput.title,
      },
    });
  }

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(id: number) {
    return this.prisma.movie.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return this.prisma.movie.update({
      data: {
        description: updateMovieInput.description,
        genre: updateMovieInput.genre,
        image: updateMovieInput.image,
        imdb: updateMovieInput.imdb,
        movieTrailerLink: updateMovieInput.movieTrailerLink,
        title: updateMovieInput.title,
      },
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }
}
