import { Router } from "express";
import { readdirSync } from "fs";
import { join } from "path";

const PATH_ROUTER = __dirname;
const router = Router();

/**
 * Limpia el nombre de archivo eliminando la extensión.
 * @param fileName - Nombre del archivo.
 * @returns El nombre del archivo sin extensión.
 */
const cleanFileName = (fileName: string) => {
  return fileName.split(".")[0];
};

// Lee el directorio de rutas y agrega las rutas al enrutador
readdirSync(PATH_ROUTER).forEach((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    // Utiliza `join` para construir la ruta completa del archivo
    const modulePath = join(PATH_ROUTER, fileName);
    // Importa el módulo dinámicamente
    import(modulePath).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    }).catch((error) => {
      console.error(`Error al cargar la ruta ${cleanName}:`, error);
    });
  }
});

export { router };
