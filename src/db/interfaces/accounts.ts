import { UserIDInfo } from "./user"

export interface Accounts {
    userId: bigint,
    balance: number,
    userIDInfo:  UserIDInfo
}