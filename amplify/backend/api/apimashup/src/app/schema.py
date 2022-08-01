from pydantic import BaseModel, HttpUrl
from typing import List, Union


class WikiResponse(BaseModel):
    title: str
    url: HttpUrl
    summary: str


class GithubRepo(BaseModel):
    url: HttpUrl
    description: str
    updated_at: str
    star: int


class Response(BaseModel):
    query: str
    wiki: Union[WikiResponse, None]
    # sof: Optional[StackOverflowAnswer]
    repos: Union[List[GithubRepo], None]