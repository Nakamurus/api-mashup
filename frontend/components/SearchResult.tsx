import { WikiResponse, GithubRepo, Response } from "../models"

export default function SearchResult({
    query, wiki, repos
}: Response) {
    return (
        <>
            <div>
                <p>You are searching { query }</p>
                {
                    wiki && <>
                        <p>Here's 
                            <a href={wiki.url}>
                                a Wikipedia article
                            </a>
                            summary on the topic:
                        </p>
                        <p>{wiki.summary}</p>
                    </>
                }
            </div>
            <div>
                {
                    repos && <ul>
                        {
                                repos.map((repo) => (
                                    <>
                                        <li>
                                            <div>
                                                <p>{repo.description}</p>
                                                <span>{repo.updated_at}</span>
                                                <span>{repo.star}</span>
                                                <span>{repo.url}</span>
                                            </div>
                                        </li>
                                    </>
                                ))
                        }
                    </ul>
                }
            </div>
        </>
    )
}