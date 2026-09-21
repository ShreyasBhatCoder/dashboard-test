export type Client = {
    id: string,
    email: string,
    name: string,
    contact: string,
    contractType: "Retainer" | "Hourly" | "Project based"
}