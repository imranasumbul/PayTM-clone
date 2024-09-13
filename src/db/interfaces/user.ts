import { Accounts } from "./accounts";

export interface UserIDInfo {
    id: bigint;
    email: string;
    password: string;
    username: string;
    accounts?: Accounts; // Assuming `Accounts` is another interface
}