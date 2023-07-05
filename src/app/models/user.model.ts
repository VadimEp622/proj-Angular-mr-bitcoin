export interface User {
    _id: string
    username: string
    isAdmin?: boolean
    name: string
    coins: number
    moves: object[]
}
