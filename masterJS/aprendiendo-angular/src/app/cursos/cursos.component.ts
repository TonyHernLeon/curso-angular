import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy{

  constructor(){
    console.log("Se ha cargado el componente: cursos.componente.ts");
  }

  ngOnInit(): void {
    // Este método se ejecuta cuando cargo el componente
    console.log("OnInit ejecutado!!");
  }

  ngDoCheck(): void {
    // Este método se ejecuta cuando se realiza un cambio en la aplicación
    console.log("DoCheck ejecutado!!");
  }

  ngOnDestroy(): void {
    // Este método se ejecuta cuando se elimine mi componente
    console.log("OnDestroy ejecutado!!");
  }
}
