import withPWAInit from "@ducanh2912/next-pwa";
import withOptimizedImages from 'next-optimized-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Encuentra la regla que maneja archivos .scss y actualízala para usar css-loader y style-loader
    const sassLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString() === '/\\.scss$/'
    );

    if (sassLoaderRule) {
      // Reemplaza el loader existente por los nuevos loaders css-loader y style-loader
      sassLoaderRule.use = ['style-loader', 'css-loader', 'sass-loader'];
    }
    
    return config;
  },
  ...withOptimizedImages()
};

// Define la configuración de PWA utilizando withPWAInit
const withPWA = withPWAInit({
  dest: "public",
  // Aquí puedes configurar otras opciones de la PWA, como los iconos y colores
});

// Combina la configuración de Next.js con la configuración de PWA
export default withPWA(nextConfig);