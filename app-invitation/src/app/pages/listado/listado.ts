import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-listado',
  imports: [CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './listado.html',
  styleUrl: './listado.scss'
})
export class Listado implements OnInit {
  confirmaciones = signal<Confirmacion[]>([]);
  cargando = signal<boolean>(true);

  private apiURL = 'http://localhost:3000/getConfirmaciones'//Ruta del endpoint getConfirmacion

  constructor(private http: HttpClient){} //Inicializamos una instancia de la dependencia de httpClient para las llamadas a las apis

  ngOnInit(): void { //Este metodo se ejecuta hasta que se muestra en pantalla tu componente
    this.loadConfirmacion();
  }

  private loadConfirmacion() {
    this.cargando.set(true);

    //Realizamos la llamada a la api quedando a la espera de
    this.http.get<Confirmacion[]>(this.apiURL).subscribe({
      next: (data)=> {
        console.log(data)
        this.confirmaciones.set(data || []);
        this.cargando.set(false);
      },
      error: (err)=> {
        console.log("Error al obtener los datos." + err)
        this.confirmaciones.set([]);
        this.cargando.set(false);
      }
    });
  }
}
