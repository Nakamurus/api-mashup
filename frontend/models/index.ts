export type WikiResponse = {
    title: string
    url: string
    summary: string
}


export type GithubRepo = {
    url: string
    description: string
    updated_at: string
    star: number
}


export type Response = {
    query: string
    wiki: WikiResponse | null
    repos: GithubRepo[] | null
}