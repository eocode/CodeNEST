import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ServeStaticModule.forRoot(
    {
      rootPath: __dirname + '/../public',
    }), 
    PokemonModule, 
    MongooseModule.forRoot('mongodb://root:pass@localhost/pokedex?authSource=admin'
  ), CommonModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
