import fs from 'fs';
import path from 'path';
import config from "@/config";
import UserReview from "@/interfaces/user_review.interface";

export async function getAllUserReviews(): Promise<UserReview[]> {
  try {
    // const res = await fetch(`${config.BACKEND_REVIEWS_URL}` as string, {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     path: `${config.GOOGLE_MAPS_PLACE_REVIEWS}`
    //   })
    // });

    // if (!res.ok) {
    //   throw new Error(`HTTP error! status: ${res.status}`);
    // }
    
    // const data: UserReview[] = await res.json();

    // return data;

    // Definir la ruta al archivo JSON local
    const filePath = path.join(process.cwd(), 'src/static', 'user_reviews.json');
    
    // Leer el archivo de manera asincrona
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parsear el contenido del archivo a un objeto JSON
    const data: UserReview[] = JSON.parse(fileContent);

    // Función para mezclar aleatoriamente los elementos (algoritmo Fisher-Yates)
    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
      }
    };

    // Mezclar los elementos aleatoriamente
    shuffleArray(data);

    // Tomar los primeros 20 elementos del arreglo mezclado
    const randomUserReview = data.slice(0, 20);

    return randomUserReview;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [] as any;
  }
}