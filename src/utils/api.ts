const api_url = 'http://localhost:3001';

export function getLocation(id: string): Promise<any>{
    const url = `${api_url}/locations/${id}`;
    return fetch(url).then(data => data.json());
}