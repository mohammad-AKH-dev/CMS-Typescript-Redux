export type taskType = {
    id: string,
    title: string,
    description: string,
    status: "Active" | "In Progress" | "Completed";
    field: 'Development' | 'Marketing' | 'Design'
}


export type tasksSliceInitialState = {
    error : boolean
    loading: boolean
    tasks : taskType[] | []
}