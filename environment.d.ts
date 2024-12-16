interface EnvironmentVariables {
  readonly PORT: string
  readonly DEBUG: string
}

declare module NodeJS {
  interface ProcessEnv extends EnvironmentVariables {
    readonly NODE_ENV: 'development' | 'production' | 'test'
  }
}
