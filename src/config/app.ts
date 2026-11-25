export const appConfig = {
  name: 'CareerPilot',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL?.trim() ?? '',
  modes: { data_mode: 'synthetic', analysis_mode: 'prewritten_demo', auth_mode: 'fixture_only' },
  // These are actual integration states, not claims inferred from environment variables.
  integrations: { firebase: false, azureOpenAI: false, azureSpeech: false },
} as const
