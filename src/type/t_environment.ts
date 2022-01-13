export interface TEnvironment {
  clientId: string;
  clientSecret: string;
  name: "Inrupt Dev-Next" | "Inrupt Production";
  oidcIssuer: string;
  pod: string;
}
