import {fileURLToPath} from 'url';
import { dirname } from 'path';

import productsModel from "../dao/models/prodcuts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

  // Función para obtener resultados filtrados y paginados
  async function obtenerResultadosFiltradosYPaginados(filtro, opcionesDePaginacion) {
    try {
      // Realiza la agregación
      const resultadosAgregados = await productsModel.aggregate([
        { $match: filtro },
        // Agrega tus etapas de agregación según sea necesario
      ]);
  
      // Pagina los resultados agregados
      const resultadosPaginados = await productsModel.paginate(resultadosAgregados, opcionesDePaginacion);
  
      return resultadosPaginados;
    } catch (error) {
      console.error("Error al obtener resultados filtrados y paginados:", error);
      throw error;
    }
  }
  
  export { productsModel, obtenerResultadosFiltradosYPaginados, __dirname };




