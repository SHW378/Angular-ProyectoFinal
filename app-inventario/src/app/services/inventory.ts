import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  // Inyección de dependencias
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api';

  productos = signal<any[]>([]);
  categorias = signal<any[]>([]);

  // Variable temporal para pasar datos entre componentes
  private productoSeleccionado: any = null;


  obtenerProductos() {
    return this.http.get<any[]>(`${this.apiUrl}/productos`).pipe(
      tap(data => this.productos.set(data)) // Actualiza la señal automáticamente al recibir datos
    );
  }

  obtenerCategorias() {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`).pipe(
      tap(data => this.categorias.set(data))
    );
  }

  crearProducto(producto: any) {
    return this.http.post(`${this.apiUrl}/productos`, producto);
  }

  editarProducto(id: number, producto: any) {
    return this.http.put(`${this.apiUrl}/productos/${id}`, producto);
  }


  registrarMovimiento(movimiento: any) {
    return this.http.post(`${this.apiUrl}/movimientos`, movimiento);
  }


  obtenerHistorial() {
    return this.http.get<any[]>(`${this.apiUrl}/movimientos`);
  }


  obtenerDashboard() {
    return this.http.get<any>(`${this.apiUrl}/dashboard`);
  }


  setProductoParaAccion(producto: any) {
    this.productoSeleccionado = producto;
  }

  getProductoParaAccion() {
    return this.productoSeleccionado;
  }


  limpiarSeleccion() {
    this.productoSeleccionado = null;
  }
}
