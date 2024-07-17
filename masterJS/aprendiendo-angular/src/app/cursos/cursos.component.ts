import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{

  constructor(){
    console.log("Se ha cargado el componente: cursos.componente.ts");
  }

  ngOnInit(): void {
    // Este método se ejecuta cuando cargo el componente
    console.log("OnInit ejecutado!!");
  }
}
