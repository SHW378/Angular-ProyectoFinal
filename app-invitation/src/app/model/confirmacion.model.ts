//Declaramos la clase modelo de la confirmación conforme a las propiedades de la entidad de nuestra base de datos

interface Confirmacion {
  id: number;
  nombre: string;
  acompanantes: number;
  confirma: number;
  mensaje: string;
  fecha: string;
}
