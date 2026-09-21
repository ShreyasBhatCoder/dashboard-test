export type Ticket = {
    id: string,
    clientName: string,
    subject: string,
    status: "New" | "Open" | "Pending" | "Resolved" | "Closed",
    priority: "High" | "Medium" | "Low",
    date: string
}