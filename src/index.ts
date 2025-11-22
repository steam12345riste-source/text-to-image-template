export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "A sleek cyberpunk cat perched on a neon-lit rooftop at night, glowing holographic eyes, chrome cybernetic limbs, neon circuitry patterns across its fur, rainy futuristic city skyline in the background, reflections on wet surfaces, vibrant neon signs, dramatic lighting, ultra-detailed, cinematic atmosphere, 8K, hyper-realistic, dark purple and blue color palette, dynamic pose, sci-fi mood",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
