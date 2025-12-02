import StaticUrl from "@/interfaces/static_url.interface";
import path from "path";
import fs from "fs";

export async function getAllStaticUrls(): Promise<StaticUrl> {
  try {
    // Definir la ruta al archivo JSON local
    const filePath = path.join(process.cwd(), 'src/static', 'static_urls.json');
    
    // Leer el archivo de manera asincrona
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parsear el contenido del archivo a un objeto JSON
    const data: StaticUrl = JSON.parse(fileContent);
    
    return {...data};

  } catch (error) {
    console.error("Error fetching static urls:", error);
    return [] as any;
  }
}