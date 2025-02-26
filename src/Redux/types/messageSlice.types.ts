export type messageType = {
    id: string,
    img: string,
    author: string,
    socialID: string,
    description: string,
    date: string,
    message: {
        question: string | []
        answer: string | []
        questionArray?: string[]
        answerArray?: string[]
    } 
}

export type messageSliceInitialStateType = {
    error: boolean,
    loading: boolean,
    messages: messageType[] | []
}
