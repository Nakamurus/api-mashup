import { Response } from "../models";
import  {Amplify}  from 'aws-amplify'
import config from '../../src/aws-exports.js'
import { API } from 'aws-amplify'

Amplify.configure({...config})

export async function search(query: string):Promise<Response> {
    const request = {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          "query": query        }
      }

    const res = await API.get("apimashup", "/search", request)
    return await res.json()
}