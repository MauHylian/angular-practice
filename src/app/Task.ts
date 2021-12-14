/* This is an interface for out tasks in mock-tasks
*   We can see this basically a class
*/

export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}