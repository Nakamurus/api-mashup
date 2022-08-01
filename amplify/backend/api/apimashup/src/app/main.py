from typing import List, Optional
from fastapi import FastAPI
import wikipedia
from wikipedia import WikipediaPage
import requests
import urllib
from settings import GITHUB_TOKEN
from schema import WikiResponse, GithubRepo, Response

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/search")
async def search(q: str = None):
    wiki = fetch_wiki_article(q)
    # sof = fetch_stackoverflow_answers(parsed_query)
    repos = fetch_github_repos(urllib.parse.quote(q))
    res = Response(
        query=q,
        wiki=wiki,
        repos=repos)
    return res


def fetch_wiki_article(query: str) -> Optional[WikiResponse]:
    try:
        wp: WikipediaPage = wikipedia.page(query)
        return WikiResponse(
            url=wp.url,
            title=wp.title,
            summary=wp.summary
        )
    except wikipedia.exceptions.DisambiguationError as e:
        print(e)
        wps = wikipedia.search(query)
        wp = wps[0]
        if wp:
            return WikiResponse(
                url=wp.url,
                title=wp.title,
                summary=wp.summary
            )
        return None
    except wikipedia.exceptions.PageError as e:
        print(e)
        return None

def fetch_github_repos(query: str) -> Optional[List[GithubRepo]]:
    url = f"https://api.github.com/search/repositories?q={query}+in:description&page=1"
    headers = {"Authorization": f"token {GITHUB_TOKEN}"}
    res = requests.get(url, headers)

    repos = res.json()["items"]
    if len(repos) == 0:
        return None
    return list(map(
        lambda repo: GithubRepo(
            url = repo.get("html_url", None),
            description = repo.get("description", ""),
            updated_at = repo.get("updated_at", ""),
            star = repo.get("stargazers_count", 0)
        ), repos))
