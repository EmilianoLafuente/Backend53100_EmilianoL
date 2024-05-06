import {fileURLToPath} from 'url';
import { dirname } from 'path';

import productsModel from "../src/dao/models/prodcuts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

  // Función para obtener resultados filtrados y paginados
  async function obtenerResultadosFiltradosYPaginados(filtro, opcionesDePaginacion) {

    try {
      const resultadosAgregados = await productsModel.aggregate(filtro);

      const resultadosPaginados = await productsModel.paginate(resultadosAgregados, opcionesDePaginacion);
      //console.log("🚀 ~ obtenerResultadosFiltradosYPaginados ~ resultadosPaginados:", resultadosPaginados)
      //let products = await productsModel.paginate({resultadosAgregados},{pageQuery, limit, lean:true}) 
      return resultadosPaginados
      //return resultadosPaginados;
      //return products
      
    } catch (error) {
      console.error("Error al obtener resultados filtrados y paginados:", error);
      throw error;
    }
  }
  
  export { productsModel, obtenerResultadosFiltradosYPaginados, __dirname };
