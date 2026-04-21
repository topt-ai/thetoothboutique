/// <reference types="vite/client" />

export const getActiveWebhookUrl = (): string => {
  return import.meta.env.VITE_N8N_WEBHOOK_URL ||
    'https://tommy-1.app.n8n.cloud/webhook/201252fe-e004-4ec5-b525-1aa39c6d5718';
};

