import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ServeStaticModule.forRoot(
    {
      rootPath: __dirname + '/../public',
    }), 
    PokemonModule, 
    MongooseModule.forRoot('mongodb://root:pass@localhost/pokedex?authSource=admin'
  ), CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
