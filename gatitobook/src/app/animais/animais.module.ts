import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';

import { GradeFotoAnimaisComponent } from './grade-foto-animais/grade-foto-animais.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';

import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotoAnimaisComponent, DetalheAnimalComponent, ComentariosComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class AnimaisModule { }
