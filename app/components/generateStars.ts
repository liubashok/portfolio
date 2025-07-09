export type StarData = {
  x: number;
  y: number;
  size: number;
  twinkle?: boolean;
};

export function generateStars(count: number): StarData[] {
  const stars: StarData[] = [];

  const width = typeof window !== "undefined" ? window.innerWidth : 1920;
  const height = typeof window !== "undefined" ? window.innerHeight : 1080;

  for (let i = 0; i < count; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() < 0.1 ? 3 : Math.random() < 0.3 ? 2 : 1;
    const twinkle = Math.random() < 0.01;
    stars.push({ x, y, size, twinkle });
  }

  return stars;
}
